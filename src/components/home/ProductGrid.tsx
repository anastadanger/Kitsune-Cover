"use client";

import { ProductArtSvg } from "@/components/home/ProductArtSvg";
import { useActiveCollection } from "@/components/home/CollectionProvider";
import { useTranslations } from "next-intl";

type ProductRow = {
  name: string;
  ip: string;
  status: string;
  price: string;
  remaining: string;
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
      <div className="mx-auto max-w-content px-4 pb-1 pt-6 sm:px-5">
        <div className="flex flex-col gap-4 pb-0 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-block border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
              {tSection("eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(30px,5vw,62px)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-ink">
              {tSection("titleFill")}{" "}
              <span className="text-outline">{tSection("titleOutline")}</span>
            </h2>
          </div>
          <p className="mb-2.5 max-w-[56ch] text-[13px] font-bold leading-snug text-ink">
            {tSection("lead")}
          </p>
        </div>

        <div className="grid grid-cols-1 pb-6 pt-5 max-[1100px]:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const mod = i % 3;
            const bg =
              mod === 0
                ? "bg-ink text-paper"
                : mod === 1
                  ? "bg-paper text-ink"
                  : "bg-[var(--collab-accent)] text-ink";
            return (
              <article
                key={`${collection.id}-${p.name}-${i}`}
                className={`relative flex min-h-[420px] flex-col overflow-hidden border-[3px] border-ink sm:min-h-[450px] lg:min-h-[470px] ${bg}`}
              >
                <div className="flex items-start justify-between gap-3 px-3.5 pb-0 pt-3.5">
                  <span className="inline-block border-2 border-ink bg-paper px-2 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-ink">
                    {t(`${k}.label`)}
                  </span>
                  <span className="pill whitespace-nowrap border-2 border-ink bg-volt px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.15em] text-ink">
                    {p.status}
                  </span>
                </div>
                <div className="relative m-3.5 min-h-[240px] flex-1 border-[3px] border-ink bg-paper/40">
                  <ProductArtSvg
                    accent={collection.accent}
                    accent2={collection.accent2}
                    dark={i % 3 === 0}
                  />
                </div>
                <div className="mt-auto px-3.5 pb-3.5">
                  <p className="mb-2.5 text-[9px] font-black uppercase tracking-[0.18em] opacity-90">
                    {p.ip}
                  </p>
                  <h3 className="mb-2.5 font-display text-[26px] font-black uppercase leading-[0.98] tracking-[-0.04em]">
                    {p.name}
                  </h3>
                  <div className="mb-3.5 flex items-end justify-between gap-3">
                    <div className="font-display text-[28px] font-black leading-none">
                      {p.price}
                    </div>
                    <div className="text-right text-[9px] font-black uppercase leading-snug tracking-[0.18em]">
                      {p.remaining}
                    </div>
                  </div>
                  <div className="flex gap-0">
                    <a
                      href="#"
                      className="flex min-h-[46px] flex-1 items-center justify-center border-[3px] border-ink bg-ink px-2 text-[11px] font-black uppercase tracking-[0.18em] text-paper"
                    >
                      {tProducts("viewDetails")}
                    </a>
                    <a
                      href="#"
                      className="-ml-[3px] flex min-h-[46px] flex-1 items-center justify-center border-[3px] border-ink bg-volt px-2 text-[11px] font-black uppercase tracking-[0.18em] text-ink"
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
