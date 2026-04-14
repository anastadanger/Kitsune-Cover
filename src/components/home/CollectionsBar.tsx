"use client";

import { useActiveCollection } from "@/components/home/CollectionProvider";
import { collections } from "@/data/collections";
import { useTranslations } from "next-intl";

export function CollectionsBar() {
  const t = useTranslations("collections");
  const { activeIndex, setActiveIndex } = useActiveCollection();

  return (
    <div className="sticky top-[54px] z-40 border-b-[3px] border-ink bg-volt max-[820px]:top-[88px]">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-2 lg:grid-cols-7">
          {collections.map((c, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={[
                  "min-h-[72px] cursor-pointer border-r-2 border-ink px-2.5 pb-2.5 pt-3 text-left last:border-r-0 max-[820px]:min-h-[66px]",
                  active ? "bg-ink text-volt" : "bg-transparent text-ink",
                ].join(" ")}
              >
                <strong className="block font-display text-lg font-black leading-none">
                  {String(c.index).padStart(2, "0")}
                </strong>
                <span className="mt-2 block text-[8px] font-black uppercase leading-tight tracking-[0.16em]">
                  {t(c.nameKey)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
