import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig, footerColumns, socialLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-dark-green text-off-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-flex items-center">
              <Image src="/images/logo-full.webp" alt="" width={1969} height={684} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-teal-light">
              {siteConfig.taglineEn}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-off-white/70">{footerColumns.about.text}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-light">
              {footerColumns.quickLinks.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerColumns.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-off-white/80 transition-colors hover:text-teal-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-light">
              {footerColumns.theApp.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerColumns.theApp.links.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-off-white/80 transition-colors hover:text-teal-light"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-off-white/80 transition-colors hover:text-teal-light">
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-light">
              {footerColumns.connect.heading}
            </h3>
            <a
              href={`mailto:${footerColumns.connect.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-off-white/80 transition-colors hover:text-teal-light"
            >
              <Icon name="Mail" size={16} />
              {footerColumns.connect.email}
            </a>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-off-white/20 text-off-white/80 transition-colors hover:border-teal-light hover:text-teal-light"
                >
                  <SocialIcon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-off-white/10">
        <div className="container flex flex-col items-center gap-2 py-6 text-center text-sm text-off-white/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. {siteConfig.taglineEn}.
          </p>
        </div>
      </div>
    </footer>
  );
}
