import type { Copy } from "@/content/site.config";
import Container from "./Container";

export default function Footer({ t }: { t: Copy }) {
  return (
    <footer className="bg-[#0b1015] py-7 text-sm text-white/45">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p><span className="font-bold text-white/80">{t.name}</span> <span className="mx-2 text-brand">/</span> Bahrain · Est. 1959</p>
        <p>© {new Date().getFullYear()} {t.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
