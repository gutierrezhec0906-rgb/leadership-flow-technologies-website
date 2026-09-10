"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

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
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-off-white/30 px-3 py-1.5 text-xs font-semibold text-off-white transition-colors hover:border-teal-light hover:text-teal-light"
      >
        <Icon name="Globe" size={16} />
        EN
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-10 mt-2 w-56 rounded-xl border border-navy/10 bg-white p-2 text-left shadow-card"
        >
          <button
            type="button"
            role="menuitem"
            className="block w-full rounded-lg bg-pale-green px-3 py-2 text-left text-sm font-semibold text-dark-green"
            onClick={() => setOpen(false)}
          >
            English
          </button>
          <button
            type="button"
            role="menuitem"
            disabled
            title="Español — coming soon"
            className="mt-1 block w-full cursor-not-allowed rounded-lg px-3 py-2 text-left text-sm font-medium text-navy/50"
          >
            Español <span className="text-xs">(coming soon)</span>
          </button>
        </div>
      )}
    </div>
  );
}
