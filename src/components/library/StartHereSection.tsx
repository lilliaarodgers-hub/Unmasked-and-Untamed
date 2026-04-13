import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { Video } from "@/types/library";

interface StartHereSectionProps {
  videos: Video[];
}

export function StartHereSection({ videos: startHereVideos }: StartHereSectionProps) {
  return (
    <section
      id="start-here"
      className="bg-soft-plum section-padding"
      aria-labelledby="start-here-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start Here"
          heading="New to the library? Begin with these four."
          subheading="These four videos — in this order — give you the most immediately useful, most validating, and most widely shared introduction to everything this library holds. Total time: 54 minutes."
          align="center"
          className="mb-14"
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {startHereVideos.map((video, i) => (
            <StaggerItem key={video.id}>
              <div
                className="group relative flex flex-col gap-5 rounded-2xl border border-warm-gold/30 bg-white p-6 h-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-warm-gold/60 hover:-translate-y-0.5"
                role="button"
                tabIndex={0}
                aria-label={`Watch: ${video.title}`}
              >
                {/* Number badge */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-5xl font-light text-deep-plum/15 leading-none">
                    {i + 1}
                  </span>
                  <Badge variant="gold" className="text-xs flex items-center gap-1">
                    <Star className="size-2.5" aria-hidden="true" />
                    Start Here
                  </Badge>
                </div>

                {/* Thumbnail placeholder */}
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-soft-plum to-plum-light flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/60 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <div className="ml-0.5 border-l-[14px] border-l-deep-plum/70 border-y-[9px] border-y-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-heading text-lg font-light text-deep-plum leading-snug">
                    {video.title}
                  </h3>
                  <p className="font-body text-xs text-dark-plum/60 leading-relaxed flex-1">
                    {video.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-plum-muted">
                  <Clock className="size-3" aria-hidden="true" />
                  <span className="font-body text-xs">{video.duration}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Total time note */}
        <p className="text-center font-body text-sm text-plum-muted mt-10">
          After these four videos, you will understand what this library is, why it was built,
          and where in the journey your most urgent questions live.
        </p>
      </div>
    </section>
  );
}
