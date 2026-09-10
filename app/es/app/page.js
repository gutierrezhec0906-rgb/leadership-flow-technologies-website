import PageHero from "@/components/sections/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import ModulesGrid from "@/components/sections/ModulesGrid";
import SkillPillars from "@/components/sections/SkillPillars";
import RealTimeMonitoring from "@/components/sections/RealTimeMonitoring";
import PWASection from "@/components/sections/PWASection";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/lib/content";
import { appPage, moduleCategories, skillPillars } from "@/lib/content.es";

export const metadata = {
  title: "La Accountability App",
  description:
    "18 módulos estructurados, 5 prácticas centrales y monitoreo de progreso en tiempo real — la Accountability App es una plataforma de desarrollo de liderazgo totalmente integrada.",
  alternates: { canonical: "/es/app", languages: { en: "/app" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "La Accountability App | Leadership Flow Technologies",
    description:
      "Una plataforma de desarrollo de liderazgo totalmente integrada — 18 módulos, 5 prácticas centrales, monitoreo de progreso en tiempo real.",
  },
};

export default function AppPageEs() {
  return (
    <>
      <PageHero eyebrow={appPage.heroEyebrow} headline={appPage.heroHeadline} subheadline={appPage.heroSubheadline} />
      <HowItWorks appPage={appPage} />
      <ModulesGrid appPage={appPage} moduleCategories={moduleCategories} />
      <SkillPillars appPage={appPage} skillPillars={skillPillars} />
      <RealTimeMonitoring appPage={appPage} />
      <PWASection appPage={appPage} />
      <CtaBand headline={appPage.cta.headline} cta={appPage.cta.cta} />
    </>
  );
}
