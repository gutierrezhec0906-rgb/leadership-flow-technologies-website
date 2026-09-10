import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
export default function PWASection({ appPage }) {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow={appPage.pwaEyebrow} headline={appPage.pwa.headline} theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {appPage.pwa.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <Card className="h-full bg-white text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pale-green text-mid-green">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-dark-green">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/80">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
