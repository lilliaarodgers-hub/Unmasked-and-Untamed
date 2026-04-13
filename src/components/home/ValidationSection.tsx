import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

const validationLines = [
  "Brain fog that your doctor calls anxiety.",
  "Symptoms that started years earlier than anyone told you they would.",
  "A body that feels unfamiliar and a mind that feels unreliable.",
  "A nervous system that has been running too hard for too long.",
];

export function ValidationSection() {
  return (
    <section
      className="bg-soft-plum section-padding"
      aria-labelledby="validation-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="You are not imagining it"
          heading="Does any of this sound familiar?"
          subheading="You are not broken. You are not too sensitive. You are a neurodivergent woman in perimenopause — and no one has been telling you the truth."
          align="center"
          className="mb-16"
        />

        <StaggerContainer className="flex flex-col gap-0">
          {validationLines.map((line, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-6 py-7 border-b border-deep-plum/10 last:border-0">
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-warm-gold font-heading text-2xl leading-none"
                >
                  ✦
                </span>
                <p className="font-heading italic text-2xl md:text-3xl text-deep-plum font-light text-left leading-snug">
                  {line}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
