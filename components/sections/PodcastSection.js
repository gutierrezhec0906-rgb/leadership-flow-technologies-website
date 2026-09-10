import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function PodcastSection({ resourcesPage, podcastEpisodes }) {
  return (
    <section className="bg-pale-green py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow={resourcesPage.podcastEyebrow} headline={resourcesPage.podcastHeadline} theme="light" />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
          {podcastEpisodes.map((episode, index) => (
            <Reveal key={episode.number} delay={index * 0.06} className="flex items-center gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-green text-teal-light">
                <Icon name="Mic" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wide text-mid-green">
                  {resourcesPage.episodeLabel} {episode.number}
                </p>
                <h3 className="font-bold text-dark-green">{episode.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">{episode.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
