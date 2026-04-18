"use client";

import { useTranslations } from "next-intl";

type GuideCard = {
  ip: string;
  title: string;
  body: string;
};

export function ShopGuide() {
  const t = useTranslations("shopGuide");
  const cards = t.raw("cards") as GuideCard[];

  return (
    <section id="shop" className="border-b-[3px] border-ink bg-mist">
      <div className="mx-auto max-w-content px-4 py-6 sm:px-5">
        <div className="flex flex-col gap-4 pb-0 pt-0 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-block border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
              {t("eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(30px,5vw,62px)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-ink">
              {t("titleFill")}{" "}
              <span className="text-outline">{t("titleOutline")}</span>
            </h2>
          </div>
          <p className="mb-2.5 max-w-[56ch] text-[13px] font-bold leading-snug text-ink">
            {t("lead")}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3">
          {cards.map((card, i) => {
            const bg =
              i === 0 ? "bg-paper text-ink" : i === 1 ? "bg-ink text-paper" : "bg-volt text-ink";
            return (
              <div
                key={card.title}
                className={`flex min-h-[280px] flex-col border-[3px] border-ink ${bg} ${i > 0 ? "-ml-[3px] max-md:-ml-0 max-md:-mt-[3px]" : ""}`}
              >
                <div className="flex flex-1 flex-col justify-end p-4 pt-5">
                  <p className="mb-2.5 text-[9px] font-black uppercase tracking-[0.18em] opacity-90">
                    {card.ip}
                  </p>
                  <h3 className="mb-3 font-display text-[26px] font-black uppercase leading-tight tracking-[-0.04em]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] font-bold leading-relaxed">{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
