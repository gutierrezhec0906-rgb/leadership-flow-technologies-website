import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { pricingFaqs } from "@/lib/content";

export default function FaqSection() {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="Questions" headline="Frequently Asked Questions" theme="light" />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Accordion items={pricingFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
