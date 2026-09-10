import Reveal from "@/components/ui/Reveal";

export default function CompanyInfoSection({ aboutPage }) {
  const items = [
    { label: aboutPage.companyInfoLabels.company, value: aboutPage.companyInfo.name },
    { label: aboutPage.companyInfoLabels.location, value: aboutPage.companyInfo.location },
    { label: aboutPage.companyInfoLabels.entityNumber, value: aboutPage.companyInfo.entityNumber },
    { label: aboutPage.companyInfoLabels.founded, value: aboutPage.companyInfo.foundedYear },
  ];

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
