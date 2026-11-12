# Karawan Garage concept site (EN + AR)

Next.js App Router, TypeScript and Tailwind CSS v4. The site supports English (/en) and Arabic (/ar) with RTL layout and a language switch.

## Run it

```bash
pnpm install
pnpm dev
```

## Update the business content

Most client-specific content lives in src/content/site.config.ts.

- site: approved production domain, phone, WhatsApp availability, Maps link, brand colors and any verified opening hours.
- copy.en and copy.ar: all page copy, section labels, hero artwork text, footer labels and accessibility labels.
- seo.keywords: locale-specific search keywords.
- seo.structuredAddress: localized address fields used by the LocalBusiness structured data.

Replace site.url with the real, approved HTTPS domain before launch. While the URL is still https://example.com, the app intentionally disables indexing, does not emit production canonical/hreflang URLs, and returns an empty sitemap.

Only enable WhatsApp after confirming that the business uses the number for WhatsApp. Confirm the Arabic business name, address, service descriptions, contact details and opening hours with the business before publishing.

## SEO and social previews

- src/app/[lang]/layout.tsx defines locale-specific titles, descriptions, keywords, canonical URLs, hreflang alternates, Open Graph metadata, Twitter card metadata and crawler directives.
- src/app/[lang]/opengraph-image.tsx generates a 1200×630 Open Graph image.
- src/app/[lang]/twitter-image.tsx generates the large Twitter/X card image.
- src/app/robots.ts and src/app/sitemap.ts generate production-aware crawler instructions and the bilingual sitemap.
- src/app/[lang]/page.tsx emits localized Schema.org AutoRepair structured data.

## Validate before deployment

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Review both /en and /ar at desktop and mobile sizes, and verify the generated metadata and social previews after setting the production domain.
