import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { problems } from "@/lib/content";

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="The Problem" headline="The Leadership Development Problem" theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.1}>
              <Card className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green text-mid-green">
                  <Icon name={problem.icon} />
                </div>
                <h3 className="text-xl font-bold text-dark-green">{problem.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/80">{problem.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
