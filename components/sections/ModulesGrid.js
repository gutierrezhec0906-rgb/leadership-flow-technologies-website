import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { moduleCategories } from "@/lib/content";

export default function ModulesGrid() {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="Inside the App" headline="18 Modules Across 3 Skill Areas" theme="light" />
        <div className="mt-14 space-y-16">
          {moduleCategories.map((category) => (
            <div key={category.key}>
              <div className="mb-6 flex flex-col gap-1 border-b border-navy/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-bold text-dark-green">{category.title}</h3>
                <p className="text-sm text-navy/60">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.modules.map((mod, index) => (
                  <Reveal key={mod.name} delay={index * 0.05}>
                    <Card className="flex h-full items-start gap-4 bg-white">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pale-green text-mid-green">
                        <Icon name={mod.icon} size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-green">{mod.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-navy/70">{mod.description}</p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
