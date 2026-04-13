import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: "default" | "large";
}

export function TestimonialCard({
  testimonial,
  className,
  variant = "default",
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-border bg-white p-8",
        variant === "large" && "p-10",
        className
      )}
      style={{ boxShadow: "0 4px 24px rgba(74, 25, 104, 0.06)" }}
    >
      {/* Opening quote mark */}
      <span
        aria-hidden="true"
        className="font-heading text-5xl leading-none text-warm-gold/40 font-light"
      >
        &ldquo;
      </span>

      <blockquote>
        <p
          className={cn(
            "font-heading italic leading-relaxed text-dark-plum",
            variant === "large" ? "text-xl" : "text-lg"
          )}
        >
          {testimonial.quote}
        </p>
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full bg-soft-plum flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="font-heading text-deep-plum font-medium text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-body font-medium text-deep-plum text-sm">
            {testimonial.name}
          </p>
          <p className="font-body text-xs text-plum-muted">{testimonial.context}</p>
        </div>
      </figcaption>
    </figure>
  );
}
