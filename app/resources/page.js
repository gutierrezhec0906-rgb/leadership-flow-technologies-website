import PageHero from "@/components/sections/PageHero";
import VideoSection from "@/components/sections/VideoSection";
import PodcastSection from "@/components/sections/PodcastSection";
import BlogSection from "@/components/sections/BlogSection";
import LeadMagnet from "@/components/sections/LeadMagnet";
import { resourcesPage } from "@/lib/content";

export const metadata = {
  title: "Resources",
  description:
    "Leadership insights from the field — module videos, the Lead with Accountability podcast, articles, and a free leadership development guide.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero headline={resourcesPage.heroHeadline} />
      <VideoSection />
      <PodcastSection />
      <BlogSection />
      <LeadMagnet />
    </>
  );
}
