"use client";

import { useActiveCollection } from "@/components/home/CollectionProvider";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const locales = routing.locales;

export function StickyNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const { collection } = useActiveCollection();
  const onHome = pathname === "/";
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const studioActive = pathname === "/custom-studio";

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-mist/97 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[54px] max-w-content flex-col items-stretch justify-between gap-3 px-3 py-2.5 max-[820px]:items-stretch sm:flex-row sm:items-center sm:gap-4 sm:px-5">
        <Link
          href="/"
          className="shrink-0 font-display text-[clamp(17px,4.5vw,20px)] font-black uppercase leading-none tracking-[-0.03em] text-ink"
        >
          KITSUNE{" "}
          <span style={{ color: collection.accent }} className="mx-0.5">
            ×
          </span>{" "}
          COVER
        </Link>

        <div className="flex w-full min-w-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-3">
          <nav
            className="grid w-full grid-cols-2 overflow-hidden border-2 border-ink divide-x-2 divide-y-2 divide-ink sm:flex sm:w-auto sm:flex-wrap sm:justify-end sm:divide-none sm:overflow-visible sm:border-0"
            aria-label="Main navigation"
          >
            {(
              [
                { id: "drops", key: "drops" as const },
                { id: "stories", key: "stories" as const },
                { id: "shop", key: "shop" as const },
              ] as const
            ).map((item) => (
              <a
                key={item.key}
                href={sectionHref(item.id)}
                className="flex min-h-[48px] items-center justify-center bg-paper px-2 py-2.5 text-center text-[10px] font-black uppercase leading-tight tracking-[0.1em] text-ink hover:bg-cyber/30 sm:-ml-0.5 sm:min-h-0 sm:border-2 sm:border-ink sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.15em] sm:first:ml-0"
              >
                {t(item.key)}
              </a>
            ))}
            <Link
              href="/custom-studio"
              className={[
                "flex min-h-[48px] items-center justify-center px-2 py-2.5 text-center text-[10px] font-black uppercase leading-tight tracking-[0.1em] sm:-ml-0.5 sm:min-h-0 sm:border-2 sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.15em]",
                studioActive
                  ? "bg-ink text-volt sm:border-ink"
                  : "bg-paper text-ink hover:bg-cyber/30 sm:border-ink",
              ].join(" ")}
            >
              {t("customStudio")}
            </Link>
          </nav>

          <div
            className="grid w-full grid-cols-4 overflow-hidden border-2 border-ink divide-x-2 divide-ink sm:flex sm:w-auto sm:flex-wrap sm:justify-end sm:divide-none sm:overflow-visible sm:border-0"
            role="navigation"
            aria-label="Language switcher"
          >
            {locales.map((loc) => {
              const active = locale === loc;
              return (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={[
                    "flex min-h-[44px] items-center justify-center px-1.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] sm:-ml-0.5 sm:min-h-0 sm:border-2 sm:border-ink sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.15em] sm:first:ml-0",
                    active ? "bg-ink text-volt" : "bg-paper text-ink hover:bg-volt/80",
                  ].join(" ")}
                >
                  {t(`lang.${loc}` as "lang.en")}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
