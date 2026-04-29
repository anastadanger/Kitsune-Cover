"""Sync `collectionDrops.*.products` from en.json into ja / ko / tw."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    en = json.loads((ROOT / "messages" / "en.json").read_text(encoding="utf-8"))
    for name in ("ja.json", "ko.json", "tw.json"):
        p = ROOT / "messages" / name
        data = json.loads(p.read_text(encoding="utf-8"))
        for key in en["collectionDrops"]:
            data["collectionDrops"][key]["products"] = en["collectionDrops"][key]["products"]
        p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
