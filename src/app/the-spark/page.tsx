import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";
import { NEWSLETTER_NAME, COACH_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Spark — Weekly Newsletter",
  description:
    "The Spark is Lia Dominique's weekly newsletter. Perimenopause education, nervous system insights, and honest conversation. No spam. No daily selling.",
};

const whatYouGet = [
  "One piece of perimenopause education — current, researched, and applied to the ND experience",
  "A nervous system check-in prompt to use during the week",
  "One recommended video from the free library",
  "Lia's honest current thinking — including what she is reading, questioning, and learning",
  "Occasional community news, program updates, and early access to new content",
];

const sampleExcerpt = {
  subject: "The 3am wake is not insomnia. It is cortisol.",
  preview:
    "This week I want to talk about the 3am wake — the one that has you staring at the ceiling with a racing heart and a mind that cannot stop. Most women in my community have been told this is insomnia and offered sleep hygiene advice that does not touch it. Here is what is actually happening...",
};

export default function TheSparkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="spark-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Newsletter
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="spark-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              {NEWSLETTER_NAME}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto mb-10">
              Weekly perimenopause education from {COACH_NAME}. Honest,
              researched, and built for the neurodivergent experience. Arrives every
              Tuesday.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="max-w-md mx-auto">
              <NewsletterSignup
                variant="dark"
                placeholder="Your email address"
                ctaLabel="Join The Spark"
                formId="05787d9f0c"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="what-you-get-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="what-you-get-heading"
            className="font-heading font-light text-section text-deep-plum leading-tight mb-10"
          >
            What arrives in your inbox.
          </h2>

          <StaggerContainer className="flex flex-col gap-4">
            {whatYouGet.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                  <span
                    aria-hidden="true"
                    className="font-heading text-warm-gold text-xl leading-none shrink-0 mt-0.5"
                  >
                    ✦
                  </span>
                  <p className="font-body text-base text-dark-plum/75 leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sample excerpt */}
      <section className="bg-soft-plum section-padding" aria-labelledby="sample-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              A taste
            </p>
            <h2
              id="sample-heading"
              className="font-heading font-light text-section text-deep-plum leading-tight mb-10"
            >
              What The Spark sounds like.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              {/* Email header mockup */}
              <div className="border-b border-border px-8 py-5 bg-soft-plum/30">
                <p className="font-body text-xs text-plum-muted mb-1">Subject</p>
                <p className="font-body font-medium text-dark-plum">{sampleExcerpt.subject}</p>
              </div>
              <div className="px-8 py-8">
                <p className="font-heading italic text-lg text-deep-plum leading-relaxed mb-4">
                  &ldquo;{sampleExcerpt.preview}&rdquo;
                </p>
                <p className="font-body text-sm text-plum-muted">— Excerpt from The Spark, Issue 47</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you won't receive */}
      <section className="bg-sacred-cream section-padding-sm">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <OrnamentsRow className="mb-10" />
            <h2 className="font-heading font-light text-section text-deep-plum leading-tight mb-6">
              What you will <em className="italic">not</em> receive.
            </h2>
            <p className="font-body text-base text-dark-plum/65 leading-relaxed mb-6">
              Daily emails. Promotional spam. Constant selling. Fear-based content
              designed to make you feel worse about your body. Relentless upselling
              to the program every issue.
            </p>
            <p className="font-body text-base text-dark-plum/65 leading-relaxed">
              You can unsubscribe any time. No guilt. No follow-up emails asking why
              you left.
            </p>
            <OrnamentsRow className="mt-10 mb-14" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-body text-sm text-plum-muted mb-6">Ready to join?</p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup placeholder="Your email address" ctaLabel="Join The Spark — Free" formId="05787d9f0c" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
