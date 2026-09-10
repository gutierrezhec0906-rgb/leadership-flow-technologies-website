import Image from "next/image";
import { cn } from "@/lib/cn";

export default function PhoneFrame({ src, alt = "", children, className }) {
  return (
    <div className={cn("relative aspect-[9/19.5] w-full", className)}>
      <div className="absolute -left-px top-[22%] h-7 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute -left-px top-[30%] h-12 w-[3px] rounded-l-sm bg-neutral-800" />
      <div className="absolute -right-px top-[26%] h-14 w-[3px] rounded-r-sm bg-neutral-800" />

      <div className="absolute inset-0 rounded-[2.75rem] bg-neutral-900 shadow-card-hover ring-1 ring-black/20" />

      <div className="absolute inset-[10px] overflow-hidden rounded-[2.25rem] bg-deep-teal">
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 320px, 60vw" />
        ) : (
          children
        )}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/50" />
      </div>

      <div className="absolute left-1/2 top-[10px] h-6 w-28 -translate-x-1/2 rounded-full bg-neutral-900" />
    </div>
  );
}
