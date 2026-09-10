import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/sections/PricingCard";
import { pricingTiers, pricingPage } from "@/lib/content";

export default function PricingSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="Plans" headline="Choose Your Plan" theme="light" />
        <p className="mx-auto mt-6 max-w-xl rounded-full bg-pale-green px-5 py-2.5 text-center text-sm font-semibold text-dark-green">
          {pricingPage.betaNote}
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.1} className="h-full">
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
