"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import Icon from "@/components/ui/Icon";

const VARIANTS = {
  primary: "bg-mid-green text-white hover:bg-deep-teal focus-visible:outline-mid-green",
  secondary:
    "bg-transparent border-2 border-mid-green text-mid-green hover:bg-mid-green hover:text-white focus-visible:outline-mid-green",
  "secondary-dark":
    "bg-transparent border-2 border-teal-light text-teal-light hover:bg-teal-light hover:text-dark-green focus-visible:outline-teal-light",
  ghost:
    "bg-transparent border-2 border-off-white text-off-white hover:bg-off-white hover:text-dark-green focus-visible:outline-off-white",
};

const SIZES = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <Icon name="ArrowRight" size={18} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={cn(classes, "group")} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(classes, "group")} {...props}>
      {content}
    </button>
  );
}
