"use client";

import { ProductArtSvg } from "@/components/home/ProductArtSvg";
import { useActiveCollection } from "@/components/home/CollectionProvider";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ProductRow = {
  name: string;
  ip: string;
  status: string;
  price: string;
  remaining: string;
  /** Overrides collection label in the top-left badge (e.g. one card in a mixed drop). */
  cardLabel?: string;
  /** Local public path for custom product art instead of ProductArtSvg. */
  imageSrc?: string;
};

export function ProductGrid() {
  const t = useTranslations("collectionDrops");
  const tSection = useTranslations("dropsSection");
  const tProducts = useTranslations("products");
  const { collection } = useActiveCollection();
  const k = collection.nameKey;
  const products = t.raw(`${k}.products`) as ProductRow[];

  return (
    <section id="drops" className="border-b-[3px] border-ink bg-mist" aria-label="Drops">
      <div className="mx-auto w-full max-w-content px-3 pb-1 pt-5 sm:px-5">
        <div className="flex flex-col gap-4 pb-0 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-3 inline-block border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
              {tSection("eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(26px,8vw,62px)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-ink">
              {tSection("titleFill")}{" "}
              <span className="text-outline">{tSection("titleOutline")}</span>
            </h2>
          </div>
          <p className="mb-0 max-w-[56ch] text-[13px] font-bold leading-relaxed text-ink md:mb-2.5 md:leading-snug">
            {tSection("lead")}
          </p>
        </div>

        {/* Одна колонка на телефонах; 2 с md; 3 с xl — раньше max-[1100px]:grid-cols-2 ломала мобилку */}
        <div className="grid grid-cols-1 gap-0 pb-6 pt-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => {
            const mod = i % 3;
            /** Первый столбец по умолчанию тёмный; если в слоте своё фото (imageSrc), стиль как у 02/03. */
            const isDarkTile = mod === 0 && !p.imageSrc;
            const bg = isDarkTile
              ? "bg-ink text-paper"
              : mod === 2
                ? "bg-[var(--collab-accent)] text-ink"
                : "bg-paper text-ink";
            return (
              <article
                key={`${collection.id}-${p.name}-${i}`}
                className={`relative flex min-h-[400px] flex-col overflow-hidden border-[3px] border-ink md:min-h-[440px] xl:min-h-[470px] ${bg}`}
              >
                <div className="flex items-start justify-between gap-2 px-3 pb-0 pt-3 sm:gap-3 sm:px-3.5 sm:pt-3.5">
                  <span className="min-w-0 max-w-[65%] break-words border-2 border-ink bg-paper px-2 py-1.5 text-[8px] font-black uppercase leading-tight tracking-[0.14em] text-ink sm:max-w-[70%] sm:tracking-[0.18em] md:max-w-none">
                    {p.cardLabel ?? t(`${k}.label`)}
                  </span>
                  <span className="shrink-0 pill max-w-[35%] border-2 border-ink bg-volt px-2 py-1.5 text-[7px] font-black uppercase leading-tight tracking-[0.12em] text-ink sm:max-w-none sm:px-2.5 sm:text-[8px] sm:tracking-[0.15em]">
                    {p.status}
                  </span>
                </div>
                <div className="relative m-3 min-h-[200px] flex-1 overflow-hidden border-[3px] border-ink bg-paper/40 sm:m-3.5 sm:min-h-[220px] md:min-h-[240px]">
                  {p.imageSrc ? (
                    <Image
                      src={p.imageSrc}
                      alt={`${p.name} — ${p.ip}`}
                      fill
                      sizes="(max-width: 768px) 92vw, 400px"
                      className="object-contain object-center p-2"
                    />
                  ) : (
                    <ProductArtSvg
                      accent={collection.accent}
                      accent2={collection.accent2}
                      dark={isDarkTile}
                    />
                  )}
                </div>
                <div className="mt-auto min-w-0 px-3 pb-3.5 sm:px-3.5">
                  <p className="mb-2 text-[9px] font-black uppercase leading-snug tracking-[0.14em] opacity-90 sm:mb-2.5 sm:tracking-[0.18em]">
                    {p.ip}
                  </p>
                  <h3 className="mb-3 font-display text-[1.15rem] font-black uppercase leading-[1.15] tracking-[-0.03em] text-balance sm:text-xl md:text-2xl xl:text-[26px] xl:leading-[0.98]">
                    {p.name}
                  </h3>
                  <div className="mb-3 flex flex-col gap-2 sm:mb-3.5 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                    <div className="font-display text-2xl font-black leading-none sm:text-[26px] md:text-[28px]">
                      {p.price}
                    </div>
                    <div className="text-[9px] font-black uppercase leading-snug tracking-[0.14em] sm:max-w-[55%] sm:text-right sm:tracking-[0.18em] md:max-w-none">
                      {p.remaining}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 sm:flex-row">
                    <a
                      href="#"
                      className="flex min-h-[48px] w-full flex-1 items-center justify-center border-[3px] border-ink bg-ink px-3 text-[11px] font-black uppercase tracking-[0.14em] text-paper sm:min-h-[46px] sm:px-2 sm:tracking-[0.18em]"
                    >
                      {tProducts("viewDetails")}
                    </a>
                    <a
                      href="#"
                      className="-mt-[3px] flex min-h-[48px] w-full flex-1 items-center justify-center border-[3px] border-ink bg-volt px-3 text-[11px] font-black uppercase tracking-[0.14em] text-ink sm:-ml-[3px] sm:mt-0 sm:min-h-[46px] sm:px-2 sm:tracking-[0.18em]"
                    >
                      {tProducts("partnerShop")}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
