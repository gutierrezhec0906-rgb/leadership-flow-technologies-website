import Reveal from "@/components/ui/Reveal";
import NewsletterForm from "@/components/sections/NewsletterForm";
import { resourcesPage } from "@/lib/content";

export default function LeadMagnet() {
  return (
    <section className="bg-dark-green py-20 sm:py-24">
      <div className="container text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-light">Free Resource</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight text-off-white sm:text-4xl">
            {resourcesPage.leadMagnet.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-off-white/80">{resourcesPage.leadMagnet.description}</p>
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  );
}
