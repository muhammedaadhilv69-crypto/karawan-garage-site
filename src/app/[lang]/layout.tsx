import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Figtree, IBM_Plex_Sans_Arabic } from "next/font/google";
import { site, copy } from "@/content/site.config";
import { dirOf, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--f-ar", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const hasProductionDomain = site.url !== "https://example.com";
const productionUrl = hasProductionDomain ? new URL(site.url) : undefined;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = copy[lang];
  const pageUrl = `/${lang}`;

  return {
    metadataBase: productionUrl,
    title: {
      default: t.name,
      template: `%s | ${t.name}`,
    },
    description: t.description,
    applicationName: t.name,
    category: "automotive",
    keywords: t.seo.keywords,
    ...(productionUrl
      ? {
          alternates: {
            canonical: new URL(pageUrl, productionUrl).toString(),
            languages: {
              en: new URL("/en", productionUrl).toString(),
              ar: new URL("/ar", productionUrl).toString(),
              "x-default": new URL("/en", productionUrl).toString(),
            },
          },
        }
      : {}),
    openGraph: {
      title: t.name,
      description: t.description,
      ...(productionUrl ? { url: new URL(pageUrl, productionUrl).toString() } : {}),
      siteName: t.name,
      locale: lang === "ar" ? "ar_BH" : "en_BH",
      alternateLocale: lang === "ar" ? ["en_BH"] : ["ar_BH"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.name,
      description: t.description,
    },
    robots: {
      index: hasProductionDomain,
      follow: hasProductionDomain,
      googleBot: {
        index: hasProductionDomain,
        follow: hasProductionDomain,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = site.colors;
  const vars = {
    "--primary": c.primary,
    "--brand-accent": c.accent,
    "--accent": c.accent,
    "--ink": c.ink,
    "--paper": c.paper,
    "--mist": c.mist,
    "--foreground": c.ink,
    "--background": c.paper,
    "--border": c.mist,
    "--input": c.mist,
    "--muted": c.mist,
    "--secondary": c.mist,
    "--font-display": "var(--f-display)",
    "--font-body": "var(--f-body)",
    "--font-ar": "var(--f-ar)",
    "--ring": c.accent,
  } as CSSProperties;

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body style={vars}>{children}</body>
    </html>
  );
}
