import type { MetadataRoute } from "next";
import { site } from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (site.url === "https://example.com") return [];

  const englishUrl = new URL("/en", site.url).toString();
  const arabicUrl = new URL("/ar", site.url).toString();
  const languages = {
    en: englishUrl,
    ar: arabicUrl,
  };

  return [
    {
      url: englishUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: arabicUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
