import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export const metadata: Metadata = {
  title: "Coming Soon — Unmasked & Untamed",
  description:
    "A new space for neurodivergent women navigating perimenopause. Join the waitlist to be the first to know when we launch.",
};

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen bg-deep-plum flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,160,80,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark-plum/40 to-transparent"
      />

      <div className="relative mx-auto max-w-2xl flex flex-col items-center gap-10 w-full">

        {/* Brand mark */}
        <AnimatedSection>
          <div className="flex flex-col items-center gap-3">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-warm-gold font-semibold">
              Unmasked &amp; Untamed
            </span>
            <div className="h-px w-16 bg-warm-gold/40" />
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="font-heading font-light text-hero text-sacred-cream leading-[1.05]">
            Something sacred
            <br />
            <em className="italic text-warm-gold">is coming.</em>
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.2}>
          <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-xl">
            Perimenopause education, nervous system support, and whole-woman
            transformation — built specifically for neurodivergent women who
            have been dismissed, misdiagnosed, and left without answers.
          </p>
        </AnimatedSection>

        {/* Ornament */}
        <AnimatedSection delay={0.25} className="w-full max-w-sm">
          <OrnamentsRow className="opacity-25" />
        </AnimatedSection>

        {/* Waitlist card */}
        <AnimatedSection delay={0.3} className="w-full">
          <div className="rounded-2xl border border-warm-gold/20 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-sm">
            <p className="font-heading text-2xl italic text-sacred-cream mb-2">
              Be the first to know.
            </p>
            <p className="font-body text-sm text-sacred-cream/50 mb-8 leading-relaxed">
              Sign up below and we&rsquo;ll send you one email the moment the
              site goes live — no drip sequence, no filler content.
            </p>
            <NewsletterSignup
              variant="dark"
              placeholder="Your email address"
              ctaLabel="Notify me at launch"
              formId="9350755"
            />
            <p className="mt-5 font-body text-xs text-sacred-cream/30">
              Your details stay private. Unsubscribe at any time.
            </p>
          </div>
        </AnimatedSection>

        {/* Footer note */}
        <AnimatedSection delay={0.4}>
          <p className="font-heading italic text-sacred-cream/30 text-sm">
            &ldquo;You were never too much. You were just in the wrong room.&rdquo;
          </p>
          <p className="mt-1 font-body text-xs text-sacred-cream/20">— Lia Dominique</p>
        </AnimatedSection>

      </div>
    </main>
  );
}
