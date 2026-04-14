"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Props = {
  total?: number;
  initialRemaining?: number;
};

export function UnitCounter({ total = 500, initialRemaining = 48 }: Props) {
  const t = useTranslations("products");
  const [remaining, setRemaining] = useState(initialRemaining);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((prev) => {
        const drop = Math.random() > 0.6 ? 2 : 1;
        return Math.max(0, prev - drop);
      });
    }, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const label = t("remaining", {
    current: String(remaining).padStart(3, "0"),
    total: String(total).padStart(3, "0"),
  });

  return (
    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-ink">
      {label}
    </p>
  );
}
