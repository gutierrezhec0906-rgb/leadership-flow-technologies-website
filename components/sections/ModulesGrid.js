import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function ModulesGrid({ appPage, moduleCategories }) {
  const featuredModule = moduleCategories[0].modules[0];

  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={appPage.modulesSection.eyebrow}
          headline={appPage.modulesSection.headline}
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="mx-auto w-full max-w-[280px] lg:order-2">
            <div className="relative aspect-[800/1702] overflow-hidden rounded-[2rem] shadow-card-hover">
              <Image
                src={appPage.modulesSection.screenshotSrc}
                alt={appPage.modulesSection.screenshotAlt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-mid-green">
              <Icon name={featuredModule.icon} size={24} />
            </div>
            <h3 className="text-2xl font-bold text-dark-green">{featuredModule.name}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-navy/80">{featuredModule.description}</p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16">
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
