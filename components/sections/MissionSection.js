import Reveal from "@/components/ui/Reveal";

export default function MissionSection({ aboutPage }) {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-light">{aboutPage.missionEyebrow}</p>
          <p className="text-2xl font-bold leading-snug text-off-white sm:text-3xl md:text-4xl">
            {aboutPage.mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
