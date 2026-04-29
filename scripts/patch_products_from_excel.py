"""Merge Cases.xlsx product rows into messages/en.json `collectionDrops.*.products` arrays."""

from __future__ import annotations

import json
import re
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]

PROT = {"Strong": 90, "Basic": 48}
WT = {"Mid": 56, "Light": 80, "Very Light": 94}

STATUSES = [
    "Drop live",
    "Editor pick",
    "Hot now",
    "Low stock",
    "Fresh drop",
    "Curated pick",
    "Partner pick",
]

LABEL_IP = [
    ("evangelion", "EVANGELION"),
    ("helloKitty", "TAKASHI MURAKAMI"),
    ("sailorMoon", "SUSAN FANG"),
    ("ghost", "SSEBONG"),
    ("doraemon", "ONE PIECE"),
    ("totoro", "ANN MARIE COOLICK"),
    ("tbd", "POWERPUFF GIRLS"),
]


def normalize_foto_stem(raw: str) -> str:
    """Spreadsheet names may use underscores; files under public/img/Drop**/ use spaces."""
    return str(raw).strip().replace("_", " ")


def wt_fill(raw: str) -> int:
    return WT.get(raw.strip(), 70)


def prot_fill(raw: str) -> int:
    return PROT.get(raw.strip(), 50)


def price_parts(cell) -> tuple[str, str | None]:
    s = str(cell).replace("\r", "")
    # Excel/macOS часто ломает € в один нечитаемый символ при чтении в pandas — это EUR, не GBP.
    if "\ufffd" in s:
        s = s.replace("\ufffd", "€")

    lines = [ln.strip() for ln in s.splitlines() if ln.strip()]
    pr = [ln for ln in lines if ln]
    if len(pr) >= 2:

        def num(x: str) -> float:
            m = re.search(r"([\d.,]+)", x)
            if not m:
                return 0.0
            part = m.group(1).replace(",", ".")
            try:
                return float(part)
            except ValueError:
                return 0.0

        p1, p2 = scrub_currency(pr[0]), scrub_currency(pr[1])
        n1, n2 = num(p1), num(p2)
        if n1 <= n2:
            return fix_price_symbol(p1), fix_price_symbol(p2)
        return fix_price_symbol(p2), fix_price_symbol(p1)

    one = fix_price_symbol(scrub_currency(pr[0]))
    return one, None


def scrub_currency(s: str) -> str:
    """Никаких замен EUR → GBP."""
    return s


def fix_price_symbol(p: str) -> str:
    p = p.strip()
    if p and p[0] not in "$£€":
        if any(c.isdigit() for c in p):
            # Цена без знака из EU-ячейки — по умолчанию евро (не фунт).
            p = "€" + re.sub(r"^[^\d]*", "", p)
    return p


def parse_specs(text: str) -> tuple[dict | None, dict | None]:
    protection = None
    weight = None
    for ln in [s.strip() for s in text.replace("\r", "").split("\n") if s.strip()]:
        lo = ln.lower()
        if lo.startswith("protection"):
            val = ln.split(":", 1)[1].strip()
            protection = {"label": f"Protection: {val}", "fill": prot_fill(val)}
        if lo.startswith("weight"):
            val = ln.split(":", 1)[1].strip()
            weight = {"label": f"Weight: {val}", "fill": wt_fill(val)}
    return protection, weight


def row_to_product(global_i: int, r: pd.Series, ip_line: str) -> dict:
    foto = str(r["Drop Name Foto"]).strip()
    link = str(r["affiliate links"]).strip()
    low, high = price_parts(r["Price"])
    protection, weight = parse_specs(str(r["ProductSpecBars"]))

    base: dict = {
        "name": str(r["Name"]).strip(),
        "ip": ip_line,
        "status": STATUSES[global_i % len(STATUSES)],
        "price": low,
        "imageStem": normalize_foto_stem(foto),
        "affiliateHref": link,
    }
    if high is not None:
        base["priceWas"] = high
    if protection:
        base["protection"] = protection
    if weight:
        base["weight"] = weight
    return base


def main() -> None:
    df = pd.read_excel(ROOT / "Cases.xlsx")
    spans = [(0, 3), (3, 6), (6, 9), (9, 12), (12, 15), (15, 18), (18, 21)]

    en_path = ROOT / "messages" / "en.json"
    data = json.loads(en_path.read_text(encoding="utf-8"))

    global_i = 0
    for (coll_key, ip_line), (a, b) in zip(LABEL_IP, spans, strict=True):
        products = [row_to_product(global_i + i, df.iloc[a + i], ip_line) for i in range(b - a)]
        global_i += len(products)
        data["collectionDrops"][coll_key]["products"] = products

    en_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
