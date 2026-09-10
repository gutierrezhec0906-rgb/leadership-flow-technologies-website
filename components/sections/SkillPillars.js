import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { skillPillars } from "@/lib/content";

export default function SkillPillars() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="The Foundation" headline="3 Skill Pillars" theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.1}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-green text-teal-light">
                  <Icon name={pillar.icon} size={26} />
                </div>
                <h3 className="text-xl font-bold text-dark-green">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/80">{pillar.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
