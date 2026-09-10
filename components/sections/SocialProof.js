import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { founderQuote } from "@/lib/content";

export default function SocialProof() {
  return (
    <section className="bg-dark-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="From the Founder" headline="Built by a leader who lived it" theme="dark" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-off-white/10 bg-white/5 p-8 sm:p-10">
            <Icon name="Quote" className="mb-4 text-teal-light" size={32} />
            <p className="text-xl font-medium leading-relaxed text-off-white sm:text-2xl">
              &ldquo;{founderQuote.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-bold text-off-white">{founderQuote.name}</p>
              <p className="text-sm text-teal-light">{founderQuote.title}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
