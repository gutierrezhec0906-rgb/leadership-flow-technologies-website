import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function BlogSection({ resourcesPage, blogArticles }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow={resourcesPage.blogEyebrow} headline={resourcesPage.blogHeadline} theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogArticles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.1}>
              <Card className="flex h-full flex-col">
                <span className="text-xs font-bold uppercase tracking-wide text-mid-green">{article.category}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-dark-green">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mid-green">
                  {resourcesPage.readMoreLabel} <Icon name="ArrowRight" size={16} />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
