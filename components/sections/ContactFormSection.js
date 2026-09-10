import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-dark-green sm:text-3xl">Send Us a Message</h2>
            <p className="mt-2 text-navy/70">We will get back to you within one business day.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <ContactInfo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
