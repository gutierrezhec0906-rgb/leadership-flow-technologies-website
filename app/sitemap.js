import { siteConfig } from "@/lib/content";

const routes = ["", "/about", "/app", "/practices", "/pricing", "/resources", "/contact"];

export default function sitemap() {
  const lastModified = new Date();

  const entries = [];
  for (const route of routes) {
    const enUrl = `${siteConfig.siteUrl}${route}`;
    const esUrl = `${siteConfig.siteUrl}/es${route}`;
    const languages = { en: enUrl, es: esUrl };

    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: { languages },
    });
    entries.push({
      url: esUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: { languages },
    });
  }

  return entries;
}
