import Reveal from "@/components/ui/Reveal";

export default function PageHero({ eyebrow, headline, subheadline, children }) {
  return (
    <section className="bg-dark-green pb-16 pt-36 sm:pb-20 sm:pt-40">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-light">{eyebrow}</p>
          )}
          <h1 className="text-4xl font-bold leading-tight text-off-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-6 text-lg font-medium leading-relaxed text-off-white/80 sm:text-xl">
              {subheadline}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
