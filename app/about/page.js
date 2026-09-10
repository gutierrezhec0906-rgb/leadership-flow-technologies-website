import PageHero from "@/components/sections/PageHero";
import FounderStory from "@/components/sections/FounderStory";
import MissionSection from "@/components/sections/MissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import { aboutPage } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "Leadership Flow Technologies was founded by Hector Gutierrez after 30+ years leading teams in aerospace, defense, and electronics manufacturing across the US, Mexico, and Canada.",
  alternates: { languages: { es: "/es/about" } },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutPage.heroEyebrow} headline={aboutPage.heroHeadline} />
      <FounderStory aboutPage={aboutPage} />
      <MissionSection aboutPage={aboutPage} />
      <ValuesSection aboutPage={aboutPage} />
      <CompanyInfoSection aboutPage={aboutPage} />
    </>
  );
}
