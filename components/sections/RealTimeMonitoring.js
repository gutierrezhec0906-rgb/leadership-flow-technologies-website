import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function RealTimeMonitoring({ appPage }) {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-light">{appPage.monitoringEyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-off-white sm:text-4xl">
            {appPage.monitoring.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {appPage.monitoring.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-off-white/80">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mx-auto w-full max-w-lg">
          <div className="relative aspect-[1600/1547] overflow-hidden rounded-2xl border border-white/10 shadow-card-hover">
            <Image
              src={appPage.monitoring.screenshotSrc}
              alt={appPage.monitoring.screenshotAlt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 512px, 90vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
