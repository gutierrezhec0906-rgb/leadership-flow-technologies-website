import PageHero from "@/components/sections/PageHero";
import VideoSection from "@/components/sections/VideoSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import LeadMagnet from "@/components/sections/LeadMagnet";
import { siteConfig } from "@/lib/content";
import { resourcesPage, videoResources, podcastEpisodes, blogArticles } from "@/lib/content.es";

export const metadata = {
  title: "Recursos",
  description:
    "Perspectivas de liderazgo desde el campo — videos de los módulos, el podcast Lidera con Accountability, artículos y una guía gratuita de desarrollo de liderazgo.",
  alternates: { canonical: "/es/resources", languages: { en: "/resources" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Perspectivas de Liderazgo desde el Campo | Leadership Flow Technologies",
    description: "Videos, podcast, artículos y una guía gratuita de desarrollo de liderazgo.",
  },
};

export default function ResourcesPageEs() {
  return (
    <>
      <PageHero headline={resourcesPage.heroHeadline} />
      <VideoSection resourcesPage={resourcesPage} videoResources={videoResources} />
      <PodcastSection resourcesPage={resourcesPage} podcastEpisodes={podcastEpisodes} />
      <BlogSection resourcesPage={resourcesPage} blogArticles={blogArticles} />
      <LeadMagnet resourcesPage={resourcesPage} />
    </>
  );
}
