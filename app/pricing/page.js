import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import { pricingPage, pricingTiers, pricingFaqs } from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for the Accountability App — Individual, Team, and Enterprise plans. Currently in Beta with early adopter pricing available.",
  alternates: { languages: { es: "/es/pricing" } },
};

export default function PricingPage() {
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
