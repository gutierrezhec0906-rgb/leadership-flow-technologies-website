import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function MapSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="Where We Are" headline="California, United States" theme="light" />
        <Reveal className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-navy/10 shadow-card">
          <iframe
            title="Map showing California, United States"
            src="https://www.google.com/maps?q=California,United+States&output=embed"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
