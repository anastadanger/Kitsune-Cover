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
        <div
          className={[
            "flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-none",
            "lg:grid lg:grid-cols-7 lg:overflow-visible lg:snap-none",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {collections.map((c, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={[
                  "min-h-[64px] flex-[0_0_auto] cursor-pointer snap-start border-r-2 border-ink px-3 pb-2 pt-2.5 text-left last:border-r-0 sm:min-h-[68px] sm:px-2.5 sm:pb-2.5 sm:pt-3",
                  "min-w-[min(46vw,200px)] lg:min-h-[72px] lg:min-w-0 lg:w-auto",
                  active ? "bg-ink text-volt" : "bg-transparent text-ink",
                ].join(" ")}
              >
                <strong className="block font-display text-base font-black leading-none sm:text-lg">
                  {String(c.index).padStart(2, "0")}
                </strong>
                <span className="mt-1.5 block text-[7px] font-black uppercase leading-tight tracking-[0.14em] sm:mt-2 sm:text-[8px] sm:tracking-[0.16em]">
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
