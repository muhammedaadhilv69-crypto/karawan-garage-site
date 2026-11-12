import type { Copy } from "@/content/site.config";
import { whatsappLink } from "@/content/site.config";
import type { Locale } from "@/lib/i18n";
import Container from "./Container";
import ButtonLink from "./ButtonLink";
import LanguageSwitch from "./LanguageSwitch";

export default function Header({ lang, t }: { lang: Locale; t: Copy }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111820]/95 text-white backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label={t.name}>
          <span className="grid size-10 shrink-0 place-items-center border border-signal/70 bg-signal text-[#111820]">
            <span className="font-display text-xl font-black">K</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight">{t.name}</span>
            <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45 sm:block">{t.hero.eyebrow}</span>
          </span>
        </a>
        <nav aria-label={t.navigationLabel} className="hidden items-center gap-7 text-sm font-semibold text-white/70 md:flex">
          <a className="transition-colors hover:text-signal" href="#services">{t.sections.services}</a>
          <a className="transition-colors hover:text-signal" href="#hours">{t.sections.hours}</a>
          <a className="transition-colors hover:text-signal" href="#contact">{t.sections.contact}</a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitch lang={lang} label={t.switchLabel} />
          <ButtonLink href={whatsappLink(t)} size="sm" className="hidden sm:inline-flex">
            {t.cta}
          </ButtonLink>
        </div>
      </Container>
      <nav aria-label={t.navigationLabel} className="flex items-center gap-6 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs font-semibold text-white/65 md:hidden">
        <a className="whitespace-nowrap hover:text-signal" href="#services">{t.sections.services}</a>
        <a className="whitespace-nowrap hover:text-signal" href="#hours">{t.sections.hours}</a>
        <a className="whitespace-nowrap hover:text-signal" href="#contact">{t.sections.contact}</a>
      </nav>
      <div className="progress-line" aria-hidden="true" />
    </header>
  );
}
