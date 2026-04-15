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
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-mist/97 backdrop-blur-md">
      <div className="mx-auto flex min-h-[54px] max-w-content flex-col items-stretch justify-between gap-3 px-3.5 py-2.5 max-[820px]:items-start sm:flex-row sm:items-center sm:gap-4">
        <Link
          href="/"
          className="shrink-0 font-display text-[20px] font-black uppercase leading-none tracking-[-0.03em] text-ink"
        >
          KITSUNE{" "}
          <span style={{ color: collection.accent }} className="mx-0.5">
            ×
          </span>{" "}
          COVER
        </Link>

        <div className="flex w-full flex-wrap items-center justify-end gap-3">
          <nav className="flex flex-wrap gap-0" aria-label="Main navigation">
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
                className="-ml-0.5 border-2 border-ink bg-paper px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-ink first:ml-0 hover:bg-cyber/30"
              >
                {t(item.key)}
              </a>
            ))}
            <Link
              href="/custom-studio"
              className={[
                "-ml-0.5 border-2 border-ink px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em]",
                studioActive
                  ? "bg-ink text-volt"
                  : "bg-paper text-ink hover:bg-cyber/30",
              ].join(" ")}
            >
              {t("customStudio")}
            </Link>
          </nav>

          <div
            className="flex flex-wrap gap-0"
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
                    "-ml-0.5 border-2 border-ink px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] first:ml-0",
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
