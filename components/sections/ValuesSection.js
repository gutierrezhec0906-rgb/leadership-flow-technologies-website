import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
export default function ValuesSection({ aboutPage }) {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={aboutPage.valuesSection.eyebrow}
          headline={aboutPage.valuesSection.headline}
          theme="light"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <Card className="h-full bg-white text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green text-mid-green">
                  <Icon name={value.icon} />
                </div>
                <h3 className="text-lg font-bold text-dark-green">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/80">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
