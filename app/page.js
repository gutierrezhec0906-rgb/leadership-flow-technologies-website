import HomeHero from "@/components/sections/HomeHero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PracticesPreview from "@/components/sections/PracticesPreview";
import SocialProof from "@/components/sections/SocialProof";
import CtaBand from "@/components/sections/CtaBand";
import { finalCta } from "@/lib/content";

export const metadata = {
  title: "Lead with Accountability",
  description:
    "The Accountability App is a fully integrated leadership development platform. Reduce your leadership development curve from 10 years to 6 months while monitoring every leader's progress in real time.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <SolutionSection />
      <PracticesPreview />
      <SocialProof />
      <CtaBand headline={finalCta.headline} cta={finalCta.cta} />
    </>
  );
}
