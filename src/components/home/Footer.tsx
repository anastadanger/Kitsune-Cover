"use client";

import { useActiveCollection } from "@/components/home/CollectionProvider";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const { collection } = useActiveCollection();
  const methods = t("payLine").split(" · ");

  return (
    <footer className="border-t-[3px] border-ink bg-ink pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] text-paper">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-4 px-4 py-5 sm:px-5 lg:grid-cols-[1fr_auto_auto] lg:gap-5">
        <div className="font-display text-[20px] font-black uppercase tracking-[-0.03em]">
          KITSUNE{" "}
          <span style={{ color: collection.accent }} className="mx-0.5">
            ×
          </span>{" "}
          COVER
        </div>
        <div className="flex flex-wrap gap-0" aria-label="Supported payment styles">
          {methods.map((m) => (
            <span
              key={m}
              className="-ml-0.5 border-2 border-paper px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] text-paper first:ml-0"
            >
              {m}
            </span>
          ))}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-paper/70 max-lg:text-left lg:text-right">
          {t("stack")}
        </p>
      </div>
    </footer>
  );
}
