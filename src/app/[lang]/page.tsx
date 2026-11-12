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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Workshop 4, Building D-378, Road 1205, Block 712",
      addressLocality: "Salmabad",
      addressCountry: "BH",
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
