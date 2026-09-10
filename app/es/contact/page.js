import PageHero from "@/components/sections/PageHero";
import ContactFormSection from "@/components/sections/ContactFormSection";
import DemoSection from "@/components/sections/DemoSection";
import MapSection from "@/components/sections/MapSection";
import { siteConfig } from "@/lib/content";
import { contactPage } from "@/lib/content.es";

export const metadata = {
  title: "Contacto",
  description:
    "Cuéntanos sobre tu equipo y descubre cómo encaja la Accountability App — agenda una demo o envía un mensaje a Leadership Flow Technologies.",
  alternates: { canonical: "/es/contact", languages: { en: "/contact" } },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "Desarrollemos a tus Líderes | Leadership Flow Technologies",
    description: "Cuéntanos sobre tu equipo y te mostraremos cómo encaja la Accountability App.",
  },
};

export default function ContactPageEs() {
  return (
    <>
      <PageHero headline={contactPage.heroHeadline} subheadline={contactPage.heroSubheadline} />
      <ContactFormSection contactPage={contactPage} demoHref="/es/contact#demo" />
      <DemoSection contactPage={contactPage} />
      <MapSection contactPage={contactPage} />
    </>
  );
}
