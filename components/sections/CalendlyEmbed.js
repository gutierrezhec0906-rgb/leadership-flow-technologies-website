import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

// Renders a real Calendly embed once NEXT_PUBLIC_CALENDLY_URL is set;
// otherwise shows a placeholder so the page never links out to nowhere.
export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (calendlyUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-card">
        <iframe
          src={calendlyUrl}
          title="Book a demo with Leadership Flow Technologies"
          className="h-[700px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-navy/20 bg-pale-green/40 p-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mid-green text-white">
        <Icon name="Calendar" size={26} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-dark-green">Scheduling Coming Soon</h3>
      <p className="mt-2 max-w-sm text-navy/70">
        Online scheduling is being set up. In the meantime, email us and we will find a time that works.
      </p>
      <Button href={`mailto:${siteConfig.email}`} variant="secondary" size="md" className="mt-6">
        Email to Book a Demo
      </Button>
    </div>
  );
}
