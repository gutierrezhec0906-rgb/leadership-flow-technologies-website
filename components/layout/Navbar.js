"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks as navLinksEn, siteConfig } from "@/lib/content";
import { navLinks as navLinksEs } from "@/lib/content.es";
import Icon from "@/components/ui/Icon";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const navLinks = isEs ? navLinksEs : navLinksEn;
  const homeHref = isEs ? "/es" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-dark-green/95 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="container flex h-24 items-center justify-between" aria-label="Primary">
        <Link href={homeHref} aria-label={`${siteConfig.name} — Home`} className="flex items-center">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={273}
            height={273}
            priority
            className="h-[70px] w-[70px] sm:hidden"
          />
          <Image
            src="/images/logo-full.webp"
            alt=""
            width={1969}
            height={684}
            priority
            className="hidden h-20 w-auto sm:block"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "text-sm font-semibold transition-colors hover:text-teal-light",
                      isActive ? "text-teal-light" : "text-off-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageToggle />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-off-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-off-white/10 md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-base font-semibold",
                        isActive ? "bg-mid-green/20 text-teal-light" : "text-off-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-3 pt-2">
                <LanguageToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
