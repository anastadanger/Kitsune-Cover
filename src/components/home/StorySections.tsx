"use client";

import { collections } from "@/data/collections";
import { useTranslations } from "next-intl";

export function StorySections() {
  const t = useTranslations("collectionDrops");
  const tSection = useTranslations("storiesSection");
  const tStory = useTranslations("story");

  return (
    <section id="stories" className="border-b-[3px] border-ink bg-mist">
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

        <div className="py-4 pb-6">
          {collections.map((c, index) => {
            const flip = index % 2 === 1;
            const k = c.nameKey;
            const accent = c.accent;

            return (
              <article
                key={c.id}
                className={[
                  "grid min-h-0 grid-cols-1 overflow-hidden border-[3px] border-ink bg-paper [&+&]:-mt-[3px] lg:min-h-[380px]",
                  flip
                    ? "lg:grid-cols-[1.18fr_0.82fr]"
                    : "lg:grid-cols-[0.82fr_1.18fr]",
                ].join(" ")}
              >
                <div
                  className={`relative min-h-[260px] overflow-hidden border-ink max-[1100px]:min-h-[280px] max-[1100px]:border-b-[3px] sm:min-h-[300px] lg:min-h-full ${
                    flip
                      ? "border-b-[3px] border-ink lg:order-2 lg:border-b-0 lg:border-l-[3px] lg:border-r-0 lg:border-t-0"
                      : "border-b-[3px] border-ink lg:order-none lg:border-b-0 lg:border-l-0 lg:border-r-[3px] lg:border-t-0"
                  }`}
                  style={{ backgroundColor: accent }}
                >
                  <div
                    className="pointer-events-none absolute left-[18px] top-2.5 z-[2] font-display text-[clamp(72px,10vw,140px)] font-black leading-[0.85] text-transparent"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,.55)" }}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {index === 0 ? (
                    <div
                      className="absolute left-2 top-4 z-[2] border-r-2 border-paper/35 pr-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-paper/70"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {tStory("jpVertical")}
                    </div>
                  ) : null}
                  <div className="absolute inset-0 grid place-items-center p-6">
                    <div
                      className="relative w-[min(340px,90%)] -rotate-[6deg] border-[3px] border-ink [aspect-ratio:4/5]"
                      style={{
                        background: `
                          repeating-linear-gradient(90deg, rgba(255,255,255,.16) 0 14px, transparent 14px 28px),
                          linear-gradient(135deg, rgba(255,255,255,.85), rgba(255,255,255,.24))`,
                      }}
                    >
                      <div className="absolute -left-[22px] bottom-4 h-[140px] w-[140px] rounded-full border-[3px] border-ink bg-volt" />
                      <div className="absolute right-[18px] top-[18px] h-[90px] w-[90px] rounded-full border-[3px] border-ink bg-cyber" />
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 lg:py-6 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <div className="mb-3 inline-block w-fit border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
                    {t(`${k}.storyEyebrow`)}
                  </div>
                  <h3 className="max-w-[16ch] font-display text-[clamp(22px,3vw,34px)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-ink">
                    {t(`${k}.storyTitle`)}
                  </h3>
                  <p className="mb-4 mt-3 max-w-[58ch] text-[13px] font-bold leading-relaxed text-ink">
                    {t(`${k}.storyBody`)}
                  </p>
                  <a
                    href="#stories"
                    className="text-[11px] font-black uppercase tracking-[0.18em] text-ink underline decoration-2 underline-offset-4"
                  >
                    {tStory("readMore")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
