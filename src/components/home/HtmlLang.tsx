"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    const map: Record<string, string> = {
      en: "en",
      ja: "ja",
      ko: "ko",
      tw: "zh-Hant",
    };
    document.documentElement.lang = map[locale] ?? "en";
  }, [locale]);

  return null;
}
