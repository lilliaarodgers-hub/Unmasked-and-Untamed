import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { thematicPaths } from "@/data/library/index";

export function ThematicPaths() {
  return (
    <section
      className="bg-soft-plum section-padding-sm"
      aria-labelledby="thematic-paths-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quick entry points"
          heading="Start where your question lives."
          subheading="Not sure which layer to begin with? Choose the description that matches your most urgent experience."
          align="center"
          className="mb-12"
        />

        <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {thematicPaths.map((path) => (
            <StaggerItem key={path.id}>
              <button className="group flex w-full items-start gap-4 rounded-xl border border-border bg-white p-5 text-left transition-all duration-200 hover:shadow-md hover:border-plum-light hover:-translate-y-0.5">
                <ArrowRight
                  className="size-4 shrink-0 text-warm-gold mt-0.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-body font-medium text-dark-plum text-sm leading-snug">
                    {path.label}
                  </p>
                  <p className="font-body text-xs text-plum-muted">
                    {path.description}
                  </p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
