"use client";

import { Sticker } from "@/components/home/Sticker";
import { useActiveCollection } from "@/components/home/CollectionProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("collectionDrops");
  const { collection, activeIndex } = useActiveCollection();
  const k = collection.nameKey;
  const showHeroPhone = activeIndex === 0;
  const murakamiHeroBg = collection.id === "hello-kitty";

  return (
    <section
      className="grid min-h-[calc(100svh-54px)] grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[1.1fr_.9fr]"
      aria-label="Hero"
    >
      <div
        className={[
          "relative flex h-full min-h-0 items-center overflow-hidden border-b-[3px] border-ink px-[clamp(22px,4vw,56px)] py-8 lg:border-b-0 lg:border-r-[3px]",
          murakamiHeroBg ? "" : "bg-paper",
        ].join(" ")}
      >
        {murakamiHeroBg && (
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <Image
              src="/murakami-drop2-hero-bg.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[52%_42%]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.93] via-[#ffffff]/[0.82] to-[#ffffff]/[0.72]" />
          </div>
        )}
        <div className="relative z-[1]">
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
          className="pointer-events-none absolute inset-0 -m-6 z-0 overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="absolute left-[4%] top-[5%] h-[min(172px,32vw)] w-[min(172px,32vw)] rounded-full border-[3px] border-ink bg-[#d4a096]"
            animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-[6%] top-[10%] h-[min(68px,14vw)] w-[min(68px,14vw)] rounded-full border-[3px] border-ink bg-[#8fd4ee]"
            animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-[min(320px,78vw)] w-[min(320px,78vw)] translate-x-[28%] translate-y-[32%] rounded-full border-[3px] border-ink bg-[#c9b3f0]"
            animate={{ y: [0, 12, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute bottom-[22%] left-[8%] h-[52px] w-[52px] rounded-full border-[3px] border-ink bg-[#e8a898]"
            animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
          />
          <motion.div
            className="absolute left-[18%] top-[42%] h-[38px] w-[38px] rounded-full border-[3px] border-ink bg-[#a8d8f0]"
            animate={{ y: [0, 10, 0], x: [0, 12, 0] }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
          />
          <motion.div
            className="absolute right-[22%] top-[38%] h-[min(96px,20vw)] w-[min(96px,20vw)] rounded-full border-[3px] border-ink bg-volt"
            animate={{ y: [0, -14, 0], x: [0, -9, 0] }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[8%] h-[min(84px,18vw)] w-[min(84px,18vw)] rounded-full border-[3px] border-ink bg-hot"
            animate={{ y: [0, 16, 0], scale: [1, 1.05, 1] }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
        </div>

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

        {showHeroPhone &&
          (collection.id === "evangelion" ? (
            <div className="relative z-[2] w-[min(6804px,90%)] max-w-[min(6804px,90vw)] origin-center -rotate-[13deg] scale-[1.5]">
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
          ))}
      </motion.div>
    </section>
  );
}
