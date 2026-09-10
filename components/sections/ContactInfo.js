import Icon from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import Button from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/lib/content";

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-dark-green p-8 text-off-white sm:p-10">
      <div>
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="mt-3 leading-relaxed text-off-white/80">
          Tell us about your team, or reach out directly — we typically respond within one business day.
        </p>
        <div className="mt-8 space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-off-white/90 transition-colors hover:text-teal-light"
          >
            <Icon name="Mail" size={20} />
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-3 text-off-white/90">
            <Icon name="MapPin" size={20} />
            {siteConfig.location}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-off-white/20 transition-colors hover:border-teal-light hover:text-teal-light"
            >
              <SocialIcon name={social.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
      <Button href="/contact#demo" variant="secondary-dark" size="lg" className="mt-10 w-full">
        Book a Demo
      </Button>
    </div>
  );
}
