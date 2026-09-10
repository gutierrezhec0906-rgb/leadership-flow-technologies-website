import PageHero from "@/components/sections/PageHero";
import PracticeSection from "@/components/sections/PracticeSection";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/lib/content";
import { practices, practicesPage } from "@/lib/content.es";

export const metadata = {
  title: "Las 5 Prácticas Centrales",
  description:
    "Establece el Estándar, Enciende la Visión, Mejora el Flujo, Capacita al Equipo y Gana con Compasión — las 5 prácticas centrales de Accountability integradas en cada módulo de la Accountability App.",
  alternates: { canonical: "/es/practices", languages: { en: "/practices" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Las 5 Prácticas Centrales de la Accountability | Leadership Flow Technologies",
    description: "La Accountability no es un rasgo de personalidad. Es un sistema.",
  },
};

export default function PracticesPageEs() {
  return (
    <>
      <PageHero headline={practicesPage.headline} subheadline={practicesPage.subheadline} />
      {practices.map((practice, index) => (
        <PracticeSection
          key={practice.slug}
          practice={practice}
          index={index}
          practiceLabel={practicesPage.practiceLabel}
        />
      ))}
      <CtaBand
        headline={practicesPage.bottomCta.text}
        cta={practicesPage.bottomCta.cta}
        background="bg-dark-green"
      />
    </>
  );
}
