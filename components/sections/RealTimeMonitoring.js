import Reveal from "@/components/ui/Reveal";
import { appPage } from "@/lib/content";

const sampleLeaders = [
  { name: "Leader A", progress: 92 },
  { name: "Leader B", progress: 78 },
  { name: "Leader C", progress: 54 },
  { name: "Leader D", progress: 31 },
];

export default function RealTimeMonitoring() {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-light">Real-Time Monitoring</p>
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
        <Reveal delay={0.15} className="mx-auto w-full max-w-xs">
          <div
            className="rounded-[2.5rem] border-4 border-white/10 bg-deep-teal p-4 shadow-card-hover"
            role="img"
            aria-label="Illustration of the Accountability App's real-time team progress dashboard on a phone"
          >
            <div className="rounded-[1.75rem] bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-light">Team Progress</p>
              <div className="mt-4 space-y-4">
                {sampleLeaders.map((leader) => (
                  <div key={leader.name}>
                    <div className="mb-1.5 flex justify-between text-xs font-medium text-off-white/80">
                      <span>{leader.name}</span>
                      <span>{leader.progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-teal-light" style={{ width: `${leader.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
