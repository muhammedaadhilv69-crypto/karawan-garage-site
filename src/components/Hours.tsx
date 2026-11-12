import type { Copy } from "@/content/site.config";
import { site } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ButtonLink from "./ButtonLink";

export default function Hours({ t }: { t: Copy }) {
  return (
    <section id="hours" className="border-y border-hairline bg-[#ebe9e2] py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow mb-4">Plan your visit</p>
          <SectionTitle>{t.sections.hours}</SectionTitle>
          <p className="max-w-lg leading-relaxed text-ink-2">{t.sections.hoursNote}</p>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="mt-6 inline-flex items-center gap-2 font-bold text-ink underline decoration-signal decoration-2 underline-offset-4">
            {site.phone} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="flex flex-col justify-between border-s border-hairline ps-8 md:ps-12">
          <div><p className="eyebrow mb-4">{t.sections.findUs}</p><h3 className="max-w-[15ch] font-display text-3xl font-bold leading-tight md:text-4xl">{t.address}</h3></div>
          <ButtonLink href={site.mapsUrl} variant="outline" external className="mt-10 w-fit">{t.mapsLabel}<span aria-hidden="true" className="ms-3">↗</span></ButtonLink>
        </div>
      </Container>
    </section>
  );
}
