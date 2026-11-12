import type { Copy } from "@/content/site.config";
import { site, telLink } from "@/content/site.config";
import Container from "./Container";
import ButtonLink from "./ButtonLink";

export default function Hero({ t }: { t: Copy }) {
  return (
    <section id="top" className="hero-grid relative isolate overflow-hidden bg-[#111820] text-white">
      <div className="pointer-events-none absolute inset-y-0 end-0 -z-10 w-[48%] border-s border-white/[0.07] bg-[linear-gradient(135deg,transparent_0%,rgba(233,162,59,0.08)_100%)]" />
      <div className="pointer-events-none absolute -end-24 top-20 -z-10 size-[27rem] rounded-full border border-signal/20 md:size-[38rem]" />
      <div className="pointer-events-none absolute -end-10 top-36 -z-10 size-[22rem] rounded-full border border-white/[0.08] md:size-[32rem]" />
      <Container className="grid min-h-[min(760px,calc(100svh-5rem))] content-center gap-12 py-20 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] md:items-center md:gap-8 md:py-28">
        <div className="relative z-10">
          <p className="eyebrow mb-7 text-signal">{t.hero.eyebrow}</p>
          <h1 className="max-w-[12ch] font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.94] tracking-[-0.065em] rtl:leading-[1.2] rtl:tracking-normal">
            {t.name}
            <span className="mt-2 block text-signal">{t.hero.since}</span>
          </h1>
          <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-white/65 md:text-xl">{t.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={telLink}>{t.cta}<span aria-hidden="true" className="ms-3 text-lg">↗</span></ButtonLink>
            <ButtonLink href={site.mapsUrl} variant="ghost" external>{t.mapsLabel}</ButtonLink>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/55">
            <span><strong className="me-2 text-signal">01</strong> {t.sections.services}</span>
            <span><strong className="me-2 text-signal">02</strong> {t.sections.findUs}</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-signal" /> <bdi dir="ltr">{site.phone}</bdi></span>
          </div>
        </div>
        <div className="relative mx-auto hidden aspect-[0.88] w-full max-w-[27rem] md:block">
          <div className="absolute inset-0 border border-white/15" />
          <div className="absolute inset-4 border border-signal/40" />
          <div className="absolute inset-x-4 top-4 h-[58%] bg-[linear-gradient(145deg,#27333b_0%,#111820_58%,#202a31_100%)]">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(135deg, transparent 48%, #e9a23b 49%, transparent 50%), linear-gradient(45deg, transparent 48%, #ffffff 49%, transparent 50%)", backgroundSize: "72px 72px" }} />
            <div className="absolute bottom-7 start-7 border-s-2 border-signal ps-4">
              <span className="block text-xs font-bold uppercase tracking-[0.24em] text-signal">{t.hero.craftLabel}</span>
              <span className="mt-1 block font-display text-3xl font-bold text-white">{t.hero.craftHeadline}</span>
            </div>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex h-[30%] items-center justify-between bg-signal px-7 text-[#111820]">
            <div><span className="block text-xs font-bold uppercase tracking-[0.2em]">{t.hero.establishedLabel}</span><span className="font-display text-6xl font-black leading-none">1959</span></div>
            <span className="max-w-[7rem] text-end text-sm font-bold leading-snug">{t.hero.heritageText}</span>
          </div>
          <span className="absolute -end-5 top-10 h-16 w-1 bg-signal" />
          <span className="absolute -start-5 bottom-16 h-16 w-1 bg-white/40" />
        </div>
      </Container>
    </section>
  );
}
