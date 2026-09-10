import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import VideoCard from "@/components/sections/VideoCard";

export default function VideoSection({ resourcesPage, videoResources }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow={resourcesPage.videoEyebrow} headline={resourcesPage.videoSectionHeadline} theme="light" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoResources.map((video, index) => (
            <Reveal key={video.title} delay={index * 0.06}>
              <VideoCard {...video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
