import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import ModulesGrid from "@/components/sections/ModulesGrid";
import SkillPillars from "@/components/sections/SkillPillars";
import RealTimeMonitoring from "@/components/sections/RealTimeMonitoring";
import PWASection from "@/components/sections/PWASection";
import CtaBand from "@/components/sections/CtaBand";
import { appPage } from "@/lib/content";

export const metadata = {
  title: "The Accountability App",
  description:
    "18 structured modules, 5 core practices, and real-time progress monitoring — the Accountability App is a fully integrated leadership development platform.",
};

export default function AppPage() {
  return (
    <>
      <PageHero eyebrow="The Platform" headline={appPage.heroHeadline} subheadline={appPage.heroSubheadline} />
      <HowItWorks />
      <ModulesGrid />
      <SkillPillars />
      <RealTimeMonitoring />
      <PWASection />
      <CtaBand headline={appPage.cta.headline} cta={appPage.cta.cta} />
    </>
  );
}
