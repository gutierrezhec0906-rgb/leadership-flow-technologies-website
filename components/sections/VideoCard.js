"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function VideoCard({ title, description, youtubeId }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-mid-green hover:shadow-card-hover">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-dark-green to-deep-teal">
        {!youtubeId && (
          <div className="flex h-full items-center justify-center">
            <Icon name="PlayCircle" size={48} className="text-off-white/90" strokeWidth={1.5} />
          </div>
        )}

        {youtubeId && !playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            <Image
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <span className="absolute inset-0 bg-navy/20 transition-colors group-hover:bg-navy/10" />
            <Icon
              name="PlayCircle"
              size={56}
              className="relative text-off-white drop-shadow-lg transition-transform group-hover:scale-110"
              strokeWidth={1.5}
            />
          </button>
        )}

        {youtubeId && playing && (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-dark-green">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{description}</p>
      </div>
    </div>
  );
}
