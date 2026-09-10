import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { practices } from "@/lib/content";

export default function PracticesPreview() {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="The Framework" headline="The 5 Core Practices" theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {practices.map((practice, index) => (
            <Reveal key={practice.slug} delay={index * 0.08}>
              <Card className="flex h-full flex-col bg-white">
                <span className="text-sm font-bold text-teal-light">{practice.number}</span>
                <div className="my-4 flex h-11 w-11 items-center justify-center rounded-xl bg-pale-green text-mid-green">
                  <Icon name={practice.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-dark-green">{practice.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/80">{practice.oneLiner}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/practices"
            className="inline-flex items-center gap-2 text-base font-semibold text-mid-green transition-colors hover:text-deep-teal"
          >
            Explore all 5 practices
            <Icon name="ArrowRight" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
