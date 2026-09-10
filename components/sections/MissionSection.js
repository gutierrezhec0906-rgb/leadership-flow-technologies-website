import Reveal from "@/components/ui/Reveal";
import { aboutPage } from "@/lib/content";

export default function MissionSection() {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-light">Our Mission</p>
          <p className="text-2xl font-bold leading-snug text-off-white sm:text-3xl md:text-4xl">
            {aboutPage.mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
