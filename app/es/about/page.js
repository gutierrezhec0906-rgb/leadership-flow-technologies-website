import PageHero from "@/components/sections/PageHero";
import FounderStory from "@/components/sections/FounderStory";
import MissionSection from "@/components/sections/MissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import { siteConfig } from "@/lib/content";
import { aboutPage } from "@/lib/content.es";

export const metadata = {
  title: "Nosotros",
  description:
    "Leadership Flow Technologies fue fundada por Hector Gutierrez después de más de 30 años liderando equipos en manufactura aeroespacial, de defensa y electrónica en Estados Unidos, México, Canadá y República Checa.",
  alternates: { canonical: "/es/about", languages: { en: "/about" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Nosotros | Leadership Flow Technologies",
    description:
      "Construido por un líder que lo vivió: más de 30 años liderando equipos en manufactura aeroespacial, de defensa y electrónica.",
  },
};

export default function AboutPageEs() {
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
