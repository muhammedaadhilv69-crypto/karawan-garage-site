import type { MetadataRoute } from "next";
import { site } from "@/content/site.config";

const hasProductionDomain = site.url !== "https://example.com";

export default function robots(): MetadataRoute.Robots {
  if (!hasProductionDomain) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
