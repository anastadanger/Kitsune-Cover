"use client";

import { ProductArtSvg } from "@/components/home/ProductArtSvg";
import { ProductSpecBars } from "@/components/home/ProductSpecBars";
import { useActiveCollection } from "@/components/home/CollectionProvider";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ProductSpec = {
  label: string;
  /** 0–100 */
  fill: number;
};

type ProductRow = {
  name: string;
  ip: string;
  status: string;
  price: string;
  /** Higher old price (shown struck through before current price when set). */
  priceWas?: string;
  remaining?: string;
  /** Overrides collection label in the top-left badge (e.g. one card in a mixed drop). */
  cardLabel?: string;
  /** File name stem under `public/img/Drop{N}/`; spaces allowed (from Cases.xlsx). */
  imageStem?: string;
  /** Full path override instead of stems (optional). */
  imageSrc?: string;
  affiliateHref?: string;
  protection?: ProductSpec;
  weight?: ProductSpec;
};

/** Files under `public/img/` use underscores (e.g. TAKASHI_MURAKAMI.png); JSON/stems often use spaces. */
function filesystemStem(imageStem: string) {
  return imageStem.trim().replace(/\s+/g, "_");
}

function dropProductImage(dropIndex: number, imageStem: string) {
  const d = String(dropIndex).padStart(2, "0");
  const stem = filesystemStem(imageStem);
  return `/img/Drop${d}/${encodeURIComponent(stem)}.png`;
}

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

        <div className="grid grid-cols-1 gap-0 pb-6 pt-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => {
            const mod = i % 3;
            const isDarkTile = mod === 0;
            const bg = isDarkTile
              ? "bg-ink text-paper"
              : mod === 2
                ? "bg-[var(--collab-accent)] text-ink"
                : "bg-paper text-ink";

            const imgSrc = p.imageStem
              ? dropProductImage(collection.index, p.imageStem)
              : p.imageSrc;

            const href = p.affiliateHref ?? "#";

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
                  <ProductArtSvg accent={collection.accent} accent2={collection.accent2} dark={isDarkTile} />
                  {imgSrc ? (
                    <div className="absolute inset-0 z-[1] flex items-center justify-center px-1.5 pb-1 pt-1 sm:px-2 sm:pb-1.5 sm:pt-1.5">
                      <Image
                        src={imgSrc}
                        alt={`${p.name} — ${p.ip}`}
                        width={1024}
                        height={1024}
                        sizes="(max-width: 768px) 92vw, 420px"
                        className="h-auto max-h-[92%] w-auto max-w-[86%] object-contain drop-shadow-[3px_4px_0_rgba(0,0,0,0.55)] sm:max-h-[90%] sm:max-w-[84%]"
                        unoptimized
                      />
                    </div>
                  ) : null}
                </div>
                <div className="mt-auto min-w-0 px-3 pb-3.5 sm:px-3.5">
                  <p className="mb-2 text-[9px] font-black uppercase leading-snug tracking-[0.14em] opacity-90 sm:mb-2.5 sm:tracking-[0.18em]">
                    {p.ip}
                  </p>
                  <h3 className="mb-3 font-display text-[1.15rem] font-black uppercase leading-[1.15] tracking-[-0.03em] text-balance sm:text-xl md:text-2xl xl:text-[26px] xl:leading-[0.98]">
                    {p.name}
                  </h3>
                  <ProductSpecBars
                    protection={p.protection}
                    weight={p.weight}
                    tone={isDarkTile ? "dark" : "light"}
                  />
                  <div className="mb-3 flex flex-col gap-2 sm:mb-3.5 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                    <div className="font-display text-2xl font-black leading-none sm:text-[26px] md:text-[28px]">
                      {p.priceWas ? (
                        <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0">
                          <span
                            className={`text-xl opacity-60 line-through decoration-2 sm:text-2xl ${isDarkTile ? "decoration-paper/50" : "decoration-ink/45"}`}
                          >
                            {p.priceWas}
                          </span>
                          <span>{p.price}</span>
                        </span>
                      ) : (
                        p.price
                      )}
                    </div>
                    {p.remaining ? (
                      <div className="text-[9px] font-black uppercase leading-snug tracking-[0.14em] sm:max-w-[55%] sm:text-right sm:tracking-[0.18em] md:max-w-none">
                        {p.remaining}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-0 sm:flex-row">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] w-full flex-1 items-center justify-center border-[3px] border-ink bg-ink px-3 text-[11px] font-black uppercase tracking-[0.14em] text-paper sm:min-h-[46px] sm:px-2 sm:tracking-[0.18em]"
                    >
                      {tProducts("viewDetails")}
                    </a>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
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
