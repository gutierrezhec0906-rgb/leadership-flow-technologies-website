import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export default function CtaBand({ headline, description, cta, background = "bg-mid-green", textColor = "text-white" }) {
  return (
    <section className={cn(background, "py-20 sm:py-24")}>
      <div className="container text-center">
        <Reveal>
          <h2 className={cn("mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl", textColor)}>
            {headline}
          </h2>
          {description && (
            <p className={cn("mx-auto mt-4 max-w-xl text-lg opacity-90", textColor)}>{description}</p>
          )}
          <div className="mt-10">
            <Button href={cta.href} variant="ghost" size="lg">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
