import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function PricingCard({ tier, mostPopularLabel, annualLabel }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border-2 p-8 shadow-card transition-all duration-300",
        tier.highlighted
          ? "border-mid-green bg-dark-green text-off-white lg:-translate-y-4"
          : "border-transparent bg-white"
      )}
    >
      {tier.highlighted && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-mid-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {mostPopularLabel}
        </span>
      )}
      <h3 className={cn("text-xl font-bold", tier.highlighted ? "text-off-white" : "text-dark-green")}>
        {tier.name}
      </h3>
      <p className={cn("mt-2 text-sm", tier.highlighted ? "text-off-white/70" : "text-navy/60")}>
        {tier.description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className={cn("text-4xl font-bold", tier.highlighted ? "text-off-white" : "text-dark-green")}>
          {tier.price}
        </span>
        {tier.period && (
          <span className={cn("text-sm font-medium", tier.highlighted ? "text-off-white/70" : "text-navy/60")}>
            {tier.period}
          </span>
        )}
      </div>
      {tier.annualPrice && (
        <p className={cn("mt-1 text-sm", tier.highlighted ? "text-off-white/60" : "text-navy/50")}>
          {annualLabel}{" "}
          <span className={cn("font-semibold", tier.highlighted ? "text-off-white/80" : "text-navy/70")}>
            {tier.annualPrice}
          </span>
          {tier.annualPeriod}
        </p>
      )}
      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Icon
              name="CheckCircle2"
              size={18}
              className={cn("mt-0.5 shrink-0", tier.highlighted ? "text-teal-light" : "text-mid-green")}
            />
            <span className={tier.highlighted ? "text-off-white/90" : "text-navy/80"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button href={tier.cta.href} variant={tier.highlighted ? "secondary-dark" : "secondary"} className="mt-8 w-full">
        {tier.cta.label}
      </Button>
    </div>
  );
}
