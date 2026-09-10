import Reveal from "@/components/ui/Reveal";
import { aboutPage } from "@/lib/content";

const items = [
  { label: "Company", value: aboutPage.companyInfo.name },
  { label: "Location", value: aboutPage.companyInfo.location },
  { label: "Entity Number", value: aboutPage.companyInfo.entity.replace("Entity ", "") },
  { label: "Founded", value: aboutPage.companyInfo.founded.replace("Founded ", "") },
];

export default function CompanyInfoSection() {
  return (
    <section className="bg-white py-14">
      <div className="container">
        <Reveal className="grid grid-cols-2 gap-6 rounded-2xl border border-navy/10 bg-pale-green/40 p-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-mid-green">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-dark-green sm:text-base">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
