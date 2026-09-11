import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks({ appPage }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={appPage.howItWorksSection.eyebrow}
          headline={appPage.howItWorksSection.headline}
          theme="light"
        />
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            {appPage.howItWorks.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <span className="text-5xl font-bold text-pale-green">{step.step}</span>
                <h3 className="mt-4 text-xl font-bold text-dark-green">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/80">{step.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[700/1448]">
              <Image
                src={appPage.howItWorksSection.screenshotSrc}
                alt={appPage.howItWorksSection.screenshotAlt}
                fill
                className="object-contain"
                sizes="280px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
