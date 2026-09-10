import PageHero from "@/components/sections/PageHero";
import ContactFormSection from "@/components/sections/ContactFormSection";
import DemoSection from "@/components/sections/DemoSection";
import MapSection from "@/components/sections/MapSection";
import { contactPage } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your team and see how the Accountability App fits — book a demo or send a message to Leadership Flow Technologies.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero headline={contactPage.heroHeadline} subheadline={contactPage.heroSubheadline} />
      <ContactFormSection />
      <DemoSection />
      <MapSection />
    </>
  );
}
