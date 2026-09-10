import { siteConfig } from "@/lib/content";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
