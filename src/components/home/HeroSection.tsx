import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
}

export function HeroSection({
  headline = "For the woman who is done pretending.",
  subheadline = "Perimenopause education, nervous system support, and whole-woman transformation — built specifically for neurodivergent women who have been dismissed, misdiagnosed, and left without answers.",
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen bg-sacred-cream flex items-center pt-16"
      aria-label="Hero"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sacred-cream via-sacred-cream to-soft-plum/20 pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <AnimatedSection delay={0}>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-gold font-semibold">
                Unmasked &amp; Untamed
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading font-light text-hero leading-[1.05] text-deep-plum">
                {headline}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="font-body text-lg leading-relaxed text-dark-plum/75 max-w-xl">
                {subheadline}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" className="font-body font-semibold tracking-wide">
                <Link href="/library#start-here">
                  Get Your Free Perimenopause Starter Kit
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="font-body text-xs text-dark-plum/40">
                Free. No credit card. No spam. Just answers.
              </p>
            </AnimatedSection>
          </div>

          {/* Hero image placeholder */}
          <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-soft-plum via-plum-light to-deep-plum/20">
                {/* Decorative elements */}
                <div
                  aria-hidden="true"
                  className="absolute top-8 right-8 h-24 w-24 rounded-full bg-warm-gold/15"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-12 left-8 h-16 w-16 rounded-full bg-ember-terracotta/15"
                />
                {/* Photo placeholder text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-8">
                  <p className="font-heading text-2xl italic text-deep-plum/50">
                    Lia Dominique
                  </p>
                  <p className="font-body text-xs text-plum-muted/60 tracking-wider uppercase">
                    Photo coming soon
                  </p>
                </div>
              </div>

              {/* Floating quote card */}
              <div
                className="absolute -bottom-6 -left-6 max-w-xs rounded-xl bg-white p-5 shadow-lg border border-border"
                aria-hidden="true"
              >
                <p className="font-heading italic text-deep-plum text-sm leading-relaxed">
                  &ldquo;You were never too much. You were just in the wrong room.&rdquo;
                </p>
                <p className="mt-2 font-body text-xs text-plum-muted">— Lia Dominique</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <div className="h-8 w-px bg-deep-plum/40" />
        <p className="font-body text-xs uppercase tracking-widest text-deep-plum">Scroll</p>
      </div>
    </section>
  );
}
