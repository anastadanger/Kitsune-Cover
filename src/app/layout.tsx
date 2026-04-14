import type { Metadata } from "next";
import {
  Archivo_Black,
  Inter,
  Noto_Sans_JP,
  Noto_Sans_KR,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Kitsune Cover — Limited Collab Case Showcase",
  description:
    "Curated showcase of limited-edition phone case collaborations, collector drops, and pop-culture stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${inter.variable} ${notoJp.variable} ${notoKr.variable} bg-mist font-sans text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
