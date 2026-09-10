import HomeHero from "@/components/sections/HomeHero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PracticesPreview from "@/components/sections/PracticesPreview";
import SocialProof from "@/components/sections/SocialProof";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/lib/content";
import {
  hero,
  problemsSection,
  problems,
  solutionSection,
  solutionStats,
  solutionIntro,
  practicesPreviewSection,
  practices,
  socialProofSection,
  founderQuote,
  finalCta,
} from "@/lib/content.es";

export const metadata = {
  title: "Lidera con Accountability",
  description:
    "La Accountability App es una plataforma de desarrollo de liderazgo totalmente integrada. Reduce tu curva de desarrollo de liderazgo de 10 años a 6 meses mientras supervisas el progreso de cada líder en tiempo real.",
  alternates: { canonical: "/es", languages: { en: "/" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Lidera con Accountability | Leadership Flow Technologies",
    description:
      "La Accountability App es una plataforma de desarrollo de liderazgo totalmente integrada donde tus líderes se desarrollan a sí mismos mientras tú supervisas su progreso en tiempo real.",
  },
};

export default function HomePageEs() {
  return (
    <>
      <HomeHero hero={hero} />
      <ProblemSection problemsSection={problemsSection} problems={problems} />
      <SolutionSection solutionSection={solutionSection} solutionStats={solutionStats} solutionIntro={solutionIntro} />
      <PracticesPreview
        practicesPreviewSection={practicesPreviewSection}
        practices={practices}
        practicesHref="/es/practices"
      />
      <SocialProof socialProofSection={socialProofSection} founderQuote={founderQuote} />
      <CtaBand headline={finalCta.headline} cta={finalCta.cta} />
    </>
  );
}
