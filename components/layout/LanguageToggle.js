"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const pathname = usePathname();
  const isEs = pathname === "/es" || pathname.startsWith("/es/");

  const enHref = isEs ? pathname.replace(/^\/es/, "") || "/" : pathname;
  const esHref = isEs ? pathname : `/es${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={isEs ? "Seleccionar idioma" : "Select language"}
        className="flex items-center gap-1.5 rounded-full border border-off-white/30 px-3 py-1.5 text-xs font-semibold text-off-white transition-colors hover:border-teal-light hover:text-teal-light"
      >
        <Icon name="Globe" size={16} />
        {isEs ? "ES" : "EN"}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-10 mt-2 w-48 rounded-xl border border-navy/10 bg-white p-2 text-left shadow-card"
        >
          <Link
            href={enHref}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={cn(
              "block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold",
              !isEs ? "bg-pale-green text-dark-green" : "text-navy/70 hover:bg-pale-green/60"
            )}
          >
            English
          </Link>
          <Link
            href={esHref}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={cn(
              "mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold",
              isEs ? "bg-pale-green text-dark-green" : "text-navy/70 hover:bg-pale-green/60"
            )}
          >
            Español
          </Link>
        </div>
      )}
    </div>
  );
}
