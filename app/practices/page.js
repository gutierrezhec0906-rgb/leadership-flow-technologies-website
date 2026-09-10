import PageHero from "@/components/sections/PageHero";
import PracticeSection from "@/components/sections/PracticeSection";
import CtaBand from "@/components/sections/CtaBand";
import { practices, practicesPage } from "@/lib/content";

export const metadata = {
  title: "The 5 Core Practices",
  description:
    "Set the Bar, Spark the Vision, Improve the Flow, Enable the Team, and Win with Compassion — the 5 core practices of accountability built into every module of the Accountability App.",
};

export default function PracticesPage() {
  return (
    <>
      <PageHero headline={practicesPage.headline} subheadline={practicesPage.subheadline} />
      {practices.map((practice, index) => (
        <PracticeSection key={practice.slug} practice={practice} index={index} />
      ))}
      <CtaBand
        headline={practicesPage.bottomCta.text}
        cta={practicesPage.bottomCta.cta}
        background="bg-dark-green"
      />
    </>
  );
}
