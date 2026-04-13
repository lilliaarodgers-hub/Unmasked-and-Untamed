import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import type { PathCard } from "@/types/content";

const paths: PathCard[] = [
  {
    id: "new",
    headline: "I am new here",
    description:
      "You just found Unmasked & Untamed. Start with the free Perimenopause Starter Kit — four curated videos and a guide that will help you understand what is happening and whether this place is for you.",
    ctaLabel: "Start with the free Starter Kit",
    ctaHref: "/library#start-here",
    icon: "sparkles",
  },
  {
    id: "deeper",
    headline: "I am ready to go deeper",
    description:
      "You have been watching for a while. The free video library has 290 videos across five layers of the perimenopause journey, organised so you can start exactly where your most urgent question lives.",
    ctaLabel: "Explore the free library",
    ctaHref: "/library",
    icon: "bookopen",
  },
  {
    id: "ready",
    headline: "I am ready for Her Sacred Fire",
    description:
      "You know this is your place. You are ready for the 10-week cohort program — the container that holds all of it together. Small group. Deep transformation. The program built for you.",
    ctaLabel: "Learn about the program",
    ctaHref: "/her-sacred-fire",
    icon: "flame",
  },
];

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  bookopen: BookOpen,
  flame: Flame,
};

export function ThreePathsSection() {
  return (
    <section
      className="bg-sacred-cream section-padding border-t border-border"
      aria-labelledby="paths-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where to begin"
          heading="Which path is yours?"
          subheading="Every woman comes here differently. Choose the entry point that matches where you are right now."
          align="center"
          className="mb-16"
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = iconMap[path.icon];
            return (
              <StaggerItem key={path.id}>
                <div className="group flex flex-col gap-6 rounded-2xl border border-border bg-white p-8 h-full transition-all duration-200 hover:shadow-lg hover:border-plum-light hover:-translate-y-1">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-soft-plum flex items-center justify-center">
                    <Icon className="size-5 text-deep-plum" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-heading text-2xl font-light text-deep-plum leading-tight">
                      {path.headline}
                    </h3>
                    <p className="font-body text-sm text-dark-plum/65 leading-relaxed flex-1">
                      {path.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start px-0 text-deep-plum hover:text-warm-gold hover:bg-transparent font-body font-medium group-hover:text-warm-gold"
                  >
                    <Link href={path.ctaHref} className="flex items-center gap-2">
                      {path.ctaLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
