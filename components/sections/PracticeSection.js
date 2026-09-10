import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export default function PracticeSection({ practice, index }) {
  const reversed = index % 2 === 1;
  return (
    <section className={cn("py-16 sm:py-20", index % 2 === 0 ? "bg-white" : "bg-pale-green")}>
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className={reversed ? "lg:order-2" : undefined}>
          <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-dark-green lg:mx-0">
            <Icon name={practice.icon} size={96} className="text-teal-light" strokeWidth={1.25} />
          </div>
        </Reveal>
        <Reveal delay={0.1} className={reversed ? "lg:order-1" : undefined}>
          <span className="text-sm font-bold uppercase tracking-widest text-mid-green">
            Practice {practice.number}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-dark-green sm:text-4xl">{practice.title}</h2>
          <div className="mt-5 space-y-4">
            {practice.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-navy/80">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
