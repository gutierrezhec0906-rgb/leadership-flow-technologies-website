import Icon from "@/components/ui/Icon";

export default function VideoCard({ title, description }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-mid-green hover:shadow-card-hover">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-dark-green to-deep-teal">
        <Icon name="PlayCircle" size={48} className="text-off-white/90" strokeWidth={1.5} />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-dark-green">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{description}</p>
      </div>
    </div>
  );
}
