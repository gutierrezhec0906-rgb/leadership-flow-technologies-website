import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/lib/content";
import { pricingPage, pricingTiers, pricingFaqs } from "@/lib/content.es";

export const metadata = {
  title: "Precios",
  description:
    "Precios simples y transparentes para la Accountability App — planes Individual, Equipo y Empresarial. Actualmente en Beta con precios especiales de lanzamiento disponibles.",
  alternates: { canonical: "/es/pricing", languages: { en: "/pricing" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Precios Simples y Transparentes | Leadership Flow Technologies",
    description: "Planes Individual, Equipo y Empresarial para la Accountability App.",
  },
};

export default function PricingPageEs() {
  return (
    <>
      <PageHero headline={pricingPage.headline} />
      <PricingSection pricingTiers={pricingTiers} pricingPage={pricingPage} />
      <FaqSection pricingPage={pricingPage} pricingFaqs={pricingFaqs} />
      <CtaBand
        headline={pricingPage.consultationCta.headline}
        cta={pricingPage.consultationCta.cta}
        background="bg-dark-green"
      />
    </>
  );
}
