import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";

export default function FaqSection({ pricingPage, pricingFaqs }) {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={pricingPage.faqSection.eyebrow}
          headline={pricingPage.faqSection.headline}
          theme="light"
        />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Accordion items={pricingFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
