import { HtmlLang } from "@/components/home/HtmlLang";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const messages = await getMessages();

  const bodyFont =
    locale === "ja"
      ? "font-jp"
      : locale === "ko"
        ? "font-kr"
        : "font-sans";

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <div className={bodyFont}>{children}</div>
    </NextIntlClientProvider>
  );
}
