import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aboutPage } from "@/lib/content";

export default function FounderStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/founder-photo-placeholder.svg"
              alt="Placeholder portrait of Hector Gutierrez, founder of Leadership Flow Technologies"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 400px, 80vw"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm font-bold uppercase tracking-widest text-mid-green">The Founder</p>
          <blockquote className="mt-4 border-l-4 border-mid-green pl-5 text-2xl font-bold italic leading-snug text-dark-green sm:text-3xl">
            &ldquo;{aboutPage.storyQuote}&rdquo;
          </blockquote>
          <div className="mt-6 space-y-4">
            {aboutPage.storyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-navy/80">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-navy/10 pt-6">
            {aboutPage.experienceStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-dark-green sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
