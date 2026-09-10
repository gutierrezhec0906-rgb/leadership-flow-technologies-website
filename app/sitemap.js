import { siteConfig } from "@/lib/content";

const routes = ["", "/about", "/app", "/practices", "/pricing", "/resources", "/contact"];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
