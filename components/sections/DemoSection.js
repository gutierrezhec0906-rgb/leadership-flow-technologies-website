import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import CalendlyEmbed from "@/components/sections/CalendlyEmbed";

export default function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="Book a Demo" headline="See the Accountability App in Action" theme="light" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <CalendlyEmbed />
        </Reveal>
      </div>
    </section>
  );
}
