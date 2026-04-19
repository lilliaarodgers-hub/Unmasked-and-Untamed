import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  headingSize?: "sm" | "md" | "lg";
  className?: string;
  headingClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  id,
  eyebrow,
  heading,
  subheading,
  align = "center",
  headingSize = "md",
  className,
  headingClassName,
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  const headingSizeClass = {
    sm: "text-section",
    md: "text-display",
    lg: "text-hero",
  }[headingSize];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-body text-xs uppercase tracking-[0.15em] font-semibold",
            light ? "text-warm-gold/80" : "text-warm-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <span className="gold-line" aria-hidden="true" />
      <h2
        id={id}
        className={cn(
          "font-heading font-light leading-tight",
          headingSizeClass,
          light ? "text-sacred-cream" : "text-deep-plum",
          headingClassName
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed font-body",
            light ? "text-sacred-cream/80" : "text-plum-muted"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
