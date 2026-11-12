import type { Copy } from "@/content/site.config";
import { site, telLink } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ButtonLink from "./ButtonLink";

export default function Contact({ t }: { t: Copy }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#111820] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -end-20 -top-28 size-96 rounded-full border border-signal/20" />
      <div className="pointer-events-none absolute -end-8 -top-16 size-72 rounded-full border border-white/10" />
      <Container className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow mb-5 text-signal">{t.eyebrows.contact}</p>
          <SectionTitle>{t.sections.contact}</SectionTitle>
          <p className="max-w-xl text-lg leading-relaxed text-white/60">{t.sections.contactText}</p>
          <p className="mt-7 font-display text-2xl font-bold tracking-wide"><bdi dir="ltr">{site.phone}</bdi></p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={telLink}>{t.cta}<span aria-hidden="true" className="ms-3">↗</span></ButtonLink>
          <ButtonLink href={site.mapsUrl} variant="ghost" external>{t.mapsLabel}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
