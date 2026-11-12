import type { Copy } from "@/content/site.config";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Services({ t }: { t: Copy }) {
  if (t.services.length === 0) return null;
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <div className="mb-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="eyebrow mb-4">What we do</p><SectionTitle>{t.sections.services}</SectionTitle></div>
          <p className="max-w-xl text-base leading-relaxed text-ink-2 md:justify-self-end md:text-lg">{t.description}</p>
        </div>
        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
          {t.services.map((s, i) => (
            <article key={s.title} className="group relative min-h-52 bg-paper p-7 transition-colors duration-300 hover:bg-white md:p-9">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="text-2xl text-ink-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-ink-2 md:text-base">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
