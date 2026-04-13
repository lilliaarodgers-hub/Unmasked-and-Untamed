"use client";

import { VideoCard } from "@/components/shared/VideoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { Layer } from "@/types/library";

interface LayerSectionProps {
  layer: Layer;
}

export function LayerSection({ layer }: LayerSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Layer description */}
      <div className="rounded-2xl bg-white border border-border p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold">
              Layer {layer.number}
            </p>
            <h2 className="font-heading text-display font-light text-deep-plum leading-tight">
              {layer.title}
            </h2>
            <p className="font-heading italic text-lg text-plum-muted">
              {layer.subtitle}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Badge variant="plum" className="text-xs">
              {layer.totalVideoCount} videos
            </Badge>
            <Badge variant="gold" className="text-xs">
              {layer.estimatedTime}
            </Badge>
          </div>
        </div>

        <p className="mt-4 font-body text-base text-dark-plum/65 leading-relaxed max-w-3xl">
          {layer.description}
        </p>
      </div>

      {/* Topics accordion */}
      <div className="rounded-2xl bg-white border border-border overflow-hidden">
        <Accordion type="single" collapsible className="divide-y divide-border">
          {layer.topics.map((topic, i) => (
            <AccordionItem key={topic.id} value={topic.id} className="border-0">
              <AccordionTrigger className="px-6 md:px-8 hover:no-underline group">
                <div className="flex items-start gap-4 text-left">
                  <span
                    aria-hidden="true"
                    className="font-heading text-2xl font-light text-deep-plum/20 leading-none shrink-0 mt-0.5"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading text-lg font-light text-deep-plum group-hover:text-deep-plum/80 leading-tight">
                      {topic.title}
                    </span>
                    <span className="font-body text-xs text-plum-muted">
                      {topic.videoCount} videos · {topic.totalTime}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 md:px-8">
                {/* Topic description */}
                <p className="font-body text-sm text-dark-plum/60 leading-relaxed mb-5">
                  {topic.description}
                </p>

                {/* Videos */}
                <div className="flex flex-col gap-3">
                  {topic.videos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      showBadge={video.isStartHere}
                    />
                  ))}

                  {/* Show more placeholder if more videos exist */}
                  {topic.videoCount > topic.videos.length && (
                    <button className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border py-4 font-body text-sm text-plum-muted hover:border-deep-plum/30 hover:text-deep-plum transition-colors">
                      + {topic.videoCount - topic.videos.length} more videos in this topic
                    </button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
