import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { solutionStats, solutionIntro } from "@/lib/content";

export default function SolutionSection() {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="The Solution" headline="There is a better way" theme="dark" />
        <Reveal className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-off-white/80">{solutionIntro}</p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {solutionStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
              className="rounded-2xl border border-off-white/10 bg-white/5 px-4 py-8 text-center"
            >
              <Icon name={stat.icon} className="mx-auto mb-3 text-teal-light" size={28} />
              <p className="text-2xl font-bold text-off-white sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-teal-light">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
