import { notFound } from "next/navigation";
import { site, copy } from "@/content/site.config";
import { isLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const hasProductionDomain = site.url !== "https://example.com";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: t.name,
    description: t.description,
    telephone: site.phone,
    ...(hasProductionDomain ? { url: new URL(`/${lang}`, site.url).toString() } : {}),
    foundingDate: "1959",
    areaServed: {
      "@type": "Country",
      name: lang === "ar" ? "البحرين" : "Bahrain",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: t.seo.structuredAddress.streetAddress,
      addressLocality: t.seo.structuredAddress.addressLocality,
      addressRegion: t.seo.structuredAddress.addressRegion,
      addressCountry: t.seo.structuredAddress.addressCountry,
    },
    inLanguage: lang,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <Testimonials t={t} />
        <Hours t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppButton t={t} />
    </>
  );
}
