import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { NEWSLETTER_NAME } from "@/lib/constants";

export function NewsletterCTASection() {
  return (
    <section
      className="bg-deep-plum section-padding"
      aria-labelledby="newsletter-cta-heading"
    >
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-gold font-semibold mb-6">
            {NEWSLETTER_NAME}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            id="newsletter-cta-heading"
            className="font-heading font-light text-display text-sacred-cream leading-tight mb-6"
          >
            Not ready to dive in?
            <br />
            <em className="italic">Just stay close.</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-body text-base text-sacred-cream/65 leading-relaxed mb-3">
            The Spark arrives weekly. It contains Lia&rsquo;s most current thinking
            on perimenopause and neurodivergence — honest, research-grounded,
            and never promotional spam.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="font-body text-sm text-sacred-cream/45 leading-relaxed mb-10">
            What you will not receive: daily emails. Constant selling. Anything that makes you
            feel worse about yourself.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <NewsletterSignup
            variant="dark"
            placeholder="Your email address"
            ctaLabel="Join The Spark"
            formId="9350755"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
