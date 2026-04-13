import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export function ReframeSection() {
  return (
    <section className="bg-sacred-cream section-padding" aria-labelledby="reframe-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-gold font-semibold mb-6">
            What this is
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            id="reframe-heading"
            className="font-heading font-light text-display text-deep-plum leading-tight mb-8"
          >
            Not another wellness program.
            <br />
            <em className="italic">The first perimenopause resource</em>
            <br />
            built for you.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-body text-lg text-dark-plum/70 leading-relaxed mb-6">
            This is not a place that will tell you to push through. It is not
            another program built for neurotypical women with bodies and brains
            that do not match yours. It is not another healthcare provider
            dismissing your symptoms as stress.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="font-body text-lg text-dark-plum/70 leading-relaxed mb-12">
            Unmasked & Untamed is the first perimenopause education resource
            built at the specific intersection of neurodivergence and hormonal
            transition — the intersection where most of you have been living your
            entire lives, without language for it.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <OrnamentsRow />
        </AnimatedSection>
      </div>
    </section>
  );
}
