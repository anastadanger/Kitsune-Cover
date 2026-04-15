"use client";

import { Footer } from "@/components/home/Footer";
import { StickyNav } from "@/components/home/StickyNav";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601784551446-20c9e07c57e6?w=960&q=80&auto=format&fit=crop",
] as const;

/** Set `NEXT_PUBLIC_CUSTOM_STUDIO_PARTNER_URL` in `.env.local` to your affiliate link. */
const PARTNER_URL =
  process.env.NEXT_PUBLIC_CUSTOM_STUDIO_PARTNER_URL ??
  "https://www.casetify.com/";

type TypeRow = { title: string; body: string };
type GalleryRow = { alt: string; caption: string };

export function CustomStudioPage() {
  const t = useTranslations("customStudio");
  const types = t.raw("types") as TypeRow[];
  const gallery = t.raw("gallery") as GalleryRow[];

  return (
    <main id="top" className="min-h-[calc(100svh-54px)] bg-mist">
      <StickyNav />

      <section
        className="border-b-[3px] border-ink bg-paper"
        aria-labelledby="custom-studio-heading"
      >
        <div className="mx-auto max-w-content px-[clamp(22px,4vw,56px)] py-10 lg:py-14">
          <div className="mb-4 inline-block border-2 border-ink bg-hot px-2.5 pb-1.5 pt-2 text-[9px] font-black uppercase tracking-[0.22em] text-ink">
            {t("eyebrow")}
          </div>
          <h1
            id="custom-studio-heading"
            className="font-display text-[clamp(38px,8vw,88px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-ink"
          >
            <span className="block">{t("titleFill")}</span>
            <span className="text-outline block">{t("titleOutline")}</span>
          </h1>
          <p className="mt-4 max-w-[62ch] text-[14px] font-bold leading-relaxed text-ink">
            {t("lead")}
          </p>
          <p className="mt-4 max-w-[62ch] text-[13px] font-bold leading-relaxed text-ink/90">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-mist" aria-labelledby="types-heading">
        <div className="mx-auto max-w-content px-[clamp(22px,4vw,56px)] py-10 lg:py-12">
          <h2
            id="types-heading"
            className="mb-6 font-display text-[clamp(22px,4vw,36px)] font-black uppercase tracking-[-0.03em] text-ink"
          >
            {t("typesTitle")}
          </h2>
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {types.map((row, i) => (
              <li
                key={row.title}
                className="border-[3px] border-ink bg-paper p-5 lg:p-6"
              >
                <div className="mb-2 font-display text-[13px] font-black uppercase tracking-[0.12em] text-ink">
                  {String(i + 1).padStart(2, "0")} · {row.title}
                </div>
                <p className="text-[13px] font-bold leading-relaxed text-ink">{row.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-content px-[clamp(22px,4vw,56px)] py-10 lg:py-12">
          <div className="mb-6">
            <h2
              id="gallery-heading"
              className="font-display text-[clamp(22px,4vw,36px)] font-black uppercase tracking-[-0.03em] text-ink"
            >
              {t("galleryTitle")}
            </h2>
            <p className="mt-2 max-w-[56ch] text-[13px] font-bold leading-snug text-ink">
              {t("galleryLead")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-0 border-[3px] border-ink md:grid-cols-3 [&>div+div]:border-t-[3px] md:[&>div+div]:border-l-[3px] md:[&>div+div]:border-t-0">
            {gallery.map((item, i) => (
              <div key={item.caption} className="flex flex-col bg-mist">
                <div className="relative aspect-[4/3] border-b-[3px] border-ink bg-deep/10">
                  <Image
                    src={GALLERY_IMAGES[i] ?? GALLERY_IMAGES[0]}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="p-4 text-[11px] font-bold leading-snug text-ink">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-volt">
        <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-[clamp(22px,4vw,56px)] py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
          <div>
            <p className="font-display text-[clamp(20px,3vw,28px)] font-black uppercase tracking-[-0.03em] text-ink">
              {t("ctaTitle")}
            </p>
            <p className="mt-2 max-w-[48ch] text-[11px] font-bold uppercase tracking-[0.1em] text-ink/80">
              {t("ctaHint")}
            </p>
          </div>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center border-[3px] border-ink bg-paper px-8 text-[11px] font-black uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cyber/40"
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
