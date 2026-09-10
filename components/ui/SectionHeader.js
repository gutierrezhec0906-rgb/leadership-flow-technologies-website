import { cn } from "@/lib/cn";

const THEMES = {
  dark: {
    eyebrow: "text-teal-light",
    headline: "text-off-white",
    subheadline: "text-off-white/80",
  },
  light: {
    eyebrow: "text-mid-green",
    headline: "text-dark-green",
    subheadline: "text-navy/80",
  },
};

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  theme = "light",
  align = "center",
  className,
}) {
  const colors = THEMES[theme];
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-sm font-bold uppercase tracking-widest", colors.eyebrow)}>
          {eyebrow}
        </p>
      )}
      {headline && (
        <h2 className={cn("text-3xl font-bold leading-tight sm:text-4xl md:text-5xl", colors.headline)}>
          {headline}
        </h2>
      )}
      {subheadline && (
        <p className={cn("mt-5 text-lg font-medium leading-relaxed sm:text-xl", colors.subheadline)}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
