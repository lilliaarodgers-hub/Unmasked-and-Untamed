import { PlayCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Video } from "@/types/library";

interface VideoCardProps {
  video: Video;
  className?: string;
  showBadge?: boolean;
}

export function VideoCard({ video, className, showBadge = false }: VideoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-200 hover:shadow-md hover:border-plum-light cursor-pointer",
        className
      )}
      style={{ boxShadow: "0 2px 8px rgba(74, 25, 104, 0.04)" }}
      role="button"
      tabIndex={0}
      aria-label={`Watch: ${video.title}`}
    >
      {/* Thumbnail placeholder */}
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-soft-plum to-plum-light">
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="size-7 text-deep-plum/60 transition-transform duration-200 group-hover:scale-110 group-hover:text-deep-plum" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-start gap-2">
          <p className="font-body font-medium text-dark-plum text-sm leading-snug line-clamp-2 flex-1">
            {video.title}
          </p>
          {(showBadge || video.isStartHere) && (
            <Badge variant="gold" className="shrink-0 text-[10px]">
              Start Here
            </Badge>
          )}
        </div>
        <p className="font-body text-xs text-plum-muted line-clamp-2 leading-relaxed">
          {video.description}
        </p>
        <div className="mt-1 flex items-center gap-1 text-plum-muted">
          <Clock className="size-3" />
          <span className="font-body text-xs">{video.duration}</span>
        </div>
      </div>
    </div>
  );
}
