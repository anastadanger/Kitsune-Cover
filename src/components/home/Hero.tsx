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

  const leftHeroBg =
    collection.id === "evangelion"
      ? {
          src: "/evangelion-drop1-hero-bg.png",
          imgClass: "object-cover object-[50%_36%]",
        }
      : collection.id === "hello-kitty"
        ? {
            src: "/murakami-drop2-hero-bg.png",
            imgClass: "object-cover object-[52%_42%]",
          }
        : collection.id === "sailor-moon"
          ? {
              src: "/susan-fang-drop3-hero-bg.png",
              imgClass:
                "object-cover object-[50%_42%] origin-[50%_42%] scale-[2]",
              overlayClass:
                "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.88] via-[#ffffff]/[0.74] to-[#ffffff]/[0.60]",
            }
          : collection.id === "ghost"
            ? {
                src: "/ssebong-drop4-hero-bg.png",
                imgClass: "object-cover object-[50%_44%]",
                overlayClass:
                  "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.90] via-[#ffffff]/[0.78] to-[#ffffff]/[0.65]",
              }
            : collection.id === "doraemon"
              ? {
                  src: "/one-piece-drop5-hero-bg.png",
                  imgClass: "object-cover object-[50%_46%]",
                  overlayClass:
                    "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.96] via-[#ffffff]/[0.90] to-[#f3f3f3]/[0.80]",
                }
              : collection.id === "totoro"
                ? {
                    src: "/ann-marie-coolick-drop6-hero-bg.png",
                    imgClass: "object-cover object-[48%_44%]",
                    overlayClass:
                      "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.89] via-[#ffffff]/[0.76] to-[#faf8ff]/[0.62]",
                  }
                : collection.id === "tbd"
                  ? {
                      src: "/powerpuff-girls-drop7-hero-bg.png",
                      imgClass: "object-cover object-[50%_46%]",
                      overlayClass:
                        "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.91] via-[#ffffff]/[0.80] to-[#fff5fb]/[0.68]",
                    }
                  : null;

  return (
    <section
      className="grid min-h-[calc(100svh-54px)] max-[820px]:min-h-[calc(100svh-88px)] grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[1.1fr_.9fr]"
      aria-label="Hero"
    >
      <div
        className={[
          "relative flex h-full min-h-0 items-center overflow-hidden border-b-[3px] border-ink px-[clamp(22px,4vw,56px)] py-8 lg:border-b-0 lg:border-r-[3px]",
          leftHeroBg ? "" : "bg-paper",
        ].join(" ")}
      >
        {leftHeroBg && (
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <Image
              src={leftHeroBg.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={leftHeroBg.imgClass}
            />
            <div
              className={
                leftHeroBg.overlayClass ??
                "absolute inset-0 bg-gradient-to-br from-[#ffffff]/[0.93] via-[#ffffff]/[0.82] to-[#ffffff]/[0.72]"
              }
            />
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
          <div className="flex w-full max-w-xl flex-col gap-0 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href="#drops"
              className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center border-[3px] border-ink bg-volt px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-ink sm:min-h-[52px] sm:w-auto sm:min-w-[140px] sm:flex-none active:bg-volt/90"
            >
              {t(`${k}.ctaPrimary`)}
            </a>
            <a
              href="#stories"
              className="-mt-[3px] inline-flex min-h-[48px] w-full min-w-0 items-center justify-center border-[3px] border-ink bg-paper px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-ink sm:-ml-[3px] sm:mt-0 sm:w-auto sm:min-w-[140px] sm:flex-none sm:border-t-[3px] active:bg-paper/90"
            >
              {t(`${k}.ctaSecondary`)}
            </a>
          </div>
        </div>
      </div>

      <motion.div
        className="relative flex min-h-[260px] items-center justify-center overflow-visible p-4 sm:min-h-[320px] sm:p-6 lg:min-h-0"
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
          className="absolute right-[4%] top-[5%] z-[4] max-w-[min(200px,46vw)] min-h-[48px] px-2.5 py-2 text-[11px] tracking-[0.04em] sm:right-[7%] sm:top-[7%] sm:max-w-none sm:min-h-[54px] sm:px-3.5 sm:py-2.5 sm:text-[13px]"
        >
          {t(`${k}.stickerA`)}
        </Sticker>
        <Sticker
          tone="hot"
          rotate={9}
          className="absolute bottom-[6%] left-[4%] z-[4] max-w-[min(200px,46vw)] min-h-[48px] px-2.5 py-2 text-[11px] tracking-[0.04em] sm:bottom-[9%] sm:left-[10%] sm:max-w-none sm:min-h-[54px] sm:px-3.5 sm:py-2.5 sm:text-[13px]"
        >
          {t(`${k}.stickerB`)}
        </Sticker>

        {collection.id === "evangelion" && (
          <div className="relative z-[2] w-[min(6804px,92%)] max-w-[min(6804px,92vw)] origin-center -rotate-[10deg] scale-100 sm:-rotate-[11deg] sm:scale-110 md:scale-125 lg:-rotate-[13deg] lg:scale-[1.35] xl:scale-[1.5]">
            <Image
              src="/hero-phone-case.png"
              alt={t("evangelion.heroImageAlt")}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full object-contain [filter:drop-shadow(0_4px_0_#000)_contrast(1.2)]"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 6804px"
            />
          </div>
        )}

        {collection.id === "hello-kitty" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,660px)] max-w-[min(94vw,660px)] items-center justify-center px-2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/murakami-drop02-headphones.png"
              alt={t(`${k}.heroHeadphonesAlt`)}
              width={800}
              height={800}
              priority
              className="h-auto w-full max-h-[min(52vh,420px)] origin-center scale-[1.5] -rotate-[10deg] object-contain [filter:drop-shadow(0_6px_0_rgba(0,0,0,0.25))]"
              sizes="(max-width: 1024px) 94vw, 660px"
            />
          </motion.div>
        )}

        {collection.id === "sailor-moon" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,520px)] max-w-[min(94vw,520px)] items-center justify-center px-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/susan-fang-drop3-tablet.png"
              alt={t(`${k}.heroTabletAlt`)}
              width={560}
              height={560}
              priority
              className="h-auto w-full max-h-[min(56vh,440px)] origin-center rotate-[10deg] object-contain [filter:drop-shadow(0_6px_0_rgba(0,0,0,0.22))]"
              sizes="(max-width: 1024px) 94vw, 520px"
            />
          </motion.div>
        )}

        {collection.id === "ghost" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,1280px)] max-w-[min(98vw,1280px)] items-center justify-center px-1 sm:px-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/ssebong-drop04-macbook.png"
              alt={t(`${k}.heroMacbookAlt`)}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-h-[min(104vh,920px)] origin-center -rotate-[4deg] object-contain [filter:drop-shadow(0_10px_0_rgba(0,0,0,0.18))]"
              sizes="(max-width: 1024px) 98vw, 1280px"
            />
          </motion.div>
        )}

        {collection.id === "totoro" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,720px)] max-w-[min(92vw,720px)] items-center justify-center px-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/ann-marie-coolick-hero-case.png"
              alt={t(`${k}.heroLogoAlt`)}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-h-[min(93vh,840px)] origin-center -rotate-[8deg] object-contain [filter:drop-shadow(0_10px_0_rgba(0,0,0,0.18))]"
              sizes="(max-width: 1024px) 92vw, 720px"
            />
          </motion.div>
        )}

        {collection.id === "doraemon" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,720px)] max-w-[min(92vw,720px)] items-center justify-center px-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/one-piece-drop5-phone.png"
              alt={t(`${k}.heroPhoneAlt`)}
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-h-[min(87vh,780px)] origin-center -rotate-[10deg] object-contain [filter:drop-shadow(0_8px_0_rgba(0,0,0,0.32))]"
              sizes="(max-width: 1024px) 92vw, 720px"
            />
          </motion.div>
        )}

        {collection.id === "tbd" && (
          <motion.div
            className="relative z-[2] flex w-[min(100%,480px)] max-w-[min(94vw,480px)] items-center justify-center px-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/powerpuff-girls-drop7-phone.png"
              alt={t(`${k}.heroPhoneAlt`)}
              width={1024}
              height={1024}
              priority
              className="h-auto w-full max-h-[min(65vh,520px)] origin-center rotate-[10deg] object-contain [filter:drop-shadow(0_8px_0_rgba(0,0,0,0.28))]"
              sizes="(max-width: 1024px) 92vw, 480px"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
