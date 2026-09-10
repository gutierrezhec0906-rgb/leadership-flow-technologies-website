import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import { pricingPage } from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for the Accountability App — Individual, Team, and Enterprise plans. Currently in Beta with early adopter pricing available.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero headline={pricingPage.headline} />
      <PricingSection />
      <FaqSection />
      <CtaBand
        headline={pricingPage.consultationCta.headline}
        cta={pricingPage.consultationCta.cta}
        background="bg-dark-green"
      />
    </>
  );
}
