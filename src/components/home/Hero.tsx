"use client";

import { Sticker } from "@/components/home/Sticker";
import { useActiveCollection } from "@/components/home/CollectionProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("collectionDrops");
  const { collection } = useActiveCollection();
  const k = collection.nameKey;

  return (
    <section
      className="grid min-h-[calc(100svh-54px)] grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[1.1fr_.9fr]"
      aria-label="Hero"
    >
      <div className="relative flex items-center border-b-[3px] border-ink bg-paper px-[clamp(22px,4vw,56px)] py-8 lg:border-b-0 lg:border-r-[3px]">
        <div>
          <div className="mb-[18px] inline-block border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
            {t(`${k}.eyebrow`)}
          </div>
          <h1 className="max-w-[18ch] font-display text-[clamp(46px,10vw,108px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-ink">
            <span className="block">{t(`${k}.titleFill`)}</span>
            <span className="text-outline block">{t(`${k}.titleOutline`)}</span>
          </h1>
          <p className="mb-6 mt-3 max-w-[56ch] text-[14px] font-bold leading-relaxed text-ink">
            {t(`${k}.sub`)}
          </p>
          <div className="mb-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-display text-[26px] font-black tracking-[-0.03em] text-ink">
              {t(`${k}.price`)}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-ink">
              {t(`${k}.meta`)}
            </span>
          </div>
          <div className="flex flex-wrap gap-0">
            <a
              href="#drops"
              className="inline-flex min-h-[52px] min-w-[140px] flex-1 items-center justify-center border-[3px] border-ink bg-volt px-4 text-[11px] font-black uppercase tracking-[0.18em] text-ink sm:flex-none"
            >
              {t(`${k}.ctaPrimary`)}
            </a>
            <a
              href="#stories"
              className="-ml-[3px] inline-flex min-h-[52px] min-w-[140px] flex-1 items-center justify-center border-[3px] border-ink bg-paper px-4 text-[11px] font-black uppercase tracking-[0.18em] text-ink sm:flex-none"
            >
              {t(`${k}.ctaSecondary`)}
            </a>
          </div>
        </div>
      </div>

      <motion.div
        className="relative flex min-h-[320px] items-center justify-center overflow-visible p-6 lg:min-h-0"
        animate={{ backgroundColor: collection.heroPanel }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ color: "var(--hero-ink)" }}
      >
        <div
          className="pointer-events-none absolute left-[8%] top-[10%] h-[180px] w-[180px] rounded-full border-[3px] border-ink bg-volt/55 opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-10 -right-5 h-[320px] w-[320px] rounded-full border-[3px] border-ink bg-paper/20 opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[12%] top-[20%] h-[90px] w-[90px] rounded-full border-[3px] border-ink bg-cyber/60 opacity-90"
          aria-hidden
        />

        <Sticker
          tone="volt"
          rotate={-8}
          className="absolute right-[7%] top-[7%] z-[4] min-h-[54px] px-3.5 py-2.5 text-[13px] tracking-[0.04em]"
        >
          {t(`${k}.stickerA`)}
        </Sticker>
        <Sticker
          tone="hot"
          rotate={9}
          className="absolute bottom-[9%] left-[10%] z-[4] min-h-[54px] px-3.5 py-2.5 text-[13px] tracking-[0.04em]"
        >
          {t(`${k}.stickerB`)}
        </Sticker>

        {collection.id === "evangelion" ? (
          <div className="relative z-[2] w-[min(6804px,90%)] max-w-[min(6804px,90vw)] -rotate-[8deg]">
            <Image
              src="/hero-phone-case.png"
              alt={t("evangelion.heroImageAlt")}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full object-contain [filter:drop-shadow(0_4px_0_#000)_contrast(1.2)]"
              sizes="(max-width: 1024px) 90vw, 6804px"
            />
          </div>
        ) : (
          <div
            className="relative z-[2] w-[min(6156px,88%)] -rotate-[8deg] overflow-hidden rounded-[28px] border-[3px] border-ink shadow-none [aspect-ratio:10/19.5]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.34))",
            }}
            aria-hidden
          >
            <div
              className="absolute inset-[10px] rounded-[22px] border-2 border-ink opacity-90"
              style={{
                background: `
                radial-gradient(circle at 20% 20%, var(--collab-accent-2) 0 16%, transparent 17%),
                radial-gradient(circle at 70% 25%, #fff 0 13%, transparent 14%),
                radial-gradient(circle at 48% 68%, #000 0 11%, transparent 12%),
                linear-gradient(135deg, rgba(255,255,255,.8), rgba(255,255,255,.2))`,
              }}
            />
            <div
              className="absolute inset-[22px] overflow-hidden rounded-[18px] border-2 border-dashed border-ink"
              style={{
                background: `
                repeating-linear-gradient(0deg, rgba(255,255,255,.16) 0 14px, transparent 14px 28px),
                repeating-linear-gradient(90deg, rgba(0,0,0,.10) 0 14px, transparent 14px 28px),
                linear-gradient(135deg, var(--collab-accent), var(--collab-accent-2))`,
              }}
            >
              <div className="absolute -left-5 top-[38%] h-[190px] w-[190px] rounded-full border-[3px] border-ink bg-paper/40" />
              <div className="absolute right-3.5 top-[18px] h-[120px] w-[120px] rounded-full border-[3px] border-ink bg-volt/75" />
            </div>
            <div className="absolute left-4 top-[18px] z-[5] h-[104px] w-[86px] rounded-[18px] border-[3px] border-ink bg-paper/85">
              <span className="absolute left-3 top-3.5 h-6 w-6 rounded-full border-[3px] border-ink bg-ink" />
              <span className="absolute right-3 top-3.5 h-6 w-6 rounded-full border-[3px] border-ink bg-ink" />
              <span className="absolute bottom-4 left-7 h-6 w-6 rounded-full border-[3px] border-ink bg-ink" />
            </div>
            <div className="absolute bottom-[18px] right-3.5 z-[6] border-2 border-ink bg-paper px-2.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-ink">
              {t(`${k}.phoneTag`)}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
