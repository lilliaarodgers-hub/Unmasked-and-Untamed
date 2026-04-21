import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { getSiteOptions } from "@/lib/wordpress";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About Lia Dominique",
  description:
    "Lia Dominique built Unmasked & Untamed after sitting in a parking garage for forty minutes, unable to walk inside. The full story of why this programme exists.",
};

const values = [
  {
    title: "Rigour over reassurance",
    description:
      "This community deserves actual research, not platitudes. Every claim is sourced. Every recommendation is grounded.",
  },
  {
    title: "Specificity over generalisation",
    description:
      "Generic perimenopause advice was built for neurotypical women. This is not that. The ND brain is centred in everything.",
  },
  {
    title: "Honesty over wellness performance",
    description:
      "No toxic positivity. No mandatory gratitude. The hard parts are named honestly.",
  },
  {
    title: "Dignity over diagnosis",
    description:
      "You do not need a formal label to belong here. You need to recognise yourself in the description.",
  },
];

export default async function AboutPage() {
  const { aboutBody } = await getSiteOptions();
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="about-hero-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              About
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="about-hero-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight"
            >
              She built this because
              <br />
              <em className="italic text-warm-gold">no one else did.</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* The parking garage story */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="story-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] items-start">
            {/* Photo */}
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-soft-plum to-plum-light sticky top-24">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-6">
                  <p className="font-heading text-xl italic text-deep-plum/40">Lia Dominique</p>
                  <p className="font-body text-xs text-plum-muted/50 uppercase tracking-wider">Photo coming soon</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-6">
                <h2
                  id="story-heading"
                  className="font-heading font-light text-section text-deep-plum leading-tight"
                >
                  The parking garage.
                </h2>

                {aboutBody ? (
                  <div
                    className="prose prose-base max-w-none
                      prose-p:font-body prose-p:text-dark-plum/70 prose-p:leading-relaxed
                      prose-headings:font-heading prose-headings:font-light prose-headings:text-deep-plum
                      prose-a:text-warm-gold prose-a:underline hover:prose-a:text-deep-plum"
                    dangerouslySetInnerHTML={{ __html: aboutBody }}
                  />
                ) : (
                  [
                    "In 2021, Lia sat in a parking garage for forty minutes because she could not make herself walk inside. She had been experiencing symptoms for three years, brain fog that arrived without warning, emotional intensity that felt disproportionate to everything, a body that felt unfamiliar and a mind that felt unreliable.",
                    "She had seen seven doctors. She had been told she had anxiety, depression, burnout, and stress. She had been prescribed antidepressants, referred to therapy, and told to reduce her workload. She had not been told she was in perimenopause. She had not been told her ADHD, diagnosed only the year before at age 43, was being amplified by estrogen decline. She had not been told that any of this was connected.",
                    "That day in the parking garage, she could not walk inside because she could not find the cognitive resources to manage what would happen if she did. She sat in the car and searched, for the fifth time that month, for information about ADHD and perimenopause in women. She found almost nothing that addressed her experience directly. Almost nothing that spoke to the specific compound of neurodivergence and hormonal transition.",
                    "That was the beginning of Unmasked & Untamed.",
                    "Lia spent the following two years building the resource she had needed, reading the research, interviewing specialists, gathering the community of women who were living the same experience, and building a free video library of 290 videos across the five layers of the perimenopause journey. All of it built specifically for neurodivergent women.",
                    "Her Sacred Fire, the 10-week cohort program, followed. It is the container that holds all of the education together with live coaching, a small cohort, and the specific combination of science, soul, and nervous system support that exists nowhere else.",
                  ].map((para, i) => (
                    <p key={i} className="font-body text-base text-dark-plum/70 leading-relaxed">
                      {para}
                    </p>
                  ))
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft-plum section-padding" aria-labelledby="values-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What this place stands for"
            heading="The values that built this."
            align="center"
            className="mb-14"
          />

          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-6 h-full">
                  <h3 className="font-heading text-xl font-light text-deep-plum">{v.title}</h3>
                  <p className="font-body text-sm text-dark-plum/65 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What she stands against */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="stands-against-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              What she stands against
            </p>
            <h2
              id="stands-against-heading"
              className="font-heading font-light text-section text-deep-plum leading-tight mb-8"
            >
              This is not a neutral space.
            </h2>
          </AnimatedSection>

          {[
            "Lia is not neutral about the medical dismissal of women, and specifically of neurodivergent women, in perimenopause. The pattern of being told your symptoms are anxiety, your exhaustion is a lifestyle problem, and your brain fog is depression is not an individual failure. It is a systemic one.",
            "This space stands against that dismissal. It stands against the wellness industry's repackaging of harmful health messaging for women in midlife. It stands against the idea that perimenopause is something to push through, minimise, or manage quietly.",
            "And it stands against the specific invisibility of neurodivergent women of colour in every conversation about perimenopause, a gap this community is actively working to close.",
          ].map((para, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)}>
              <p className="font-body text-base text-dark-plum/70 leading-relaxed mb-5">
                {para}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-plum section-padding">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-light text-section text-sacred-cream leading-tight mb-6">
              Join the community.
              <br />
              <em className="italic text-warm-gold">Or just stay connected.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button asChild size="lg" variant="gold">
              <Link href="/fire-circle">Join The Fire Circle — Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sacred-cream/30 text-sacred-cream hover:bg-sacred-cream/10 hover:text-sacred-cream">
              <Link href="/library#start-here">Explore the library</Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <OrnamentsRow />
            <p className="mt-8 font-body text-sm text-sacred-cream/50 leading-relaxed">
              Or receive The Spark — Lia&rsquo;s weekly newsletter.
            </p>
            <div className="mt-4 max-w-md mx-auto">
              <NewsletterSignup variant="dark" ctaLabel="Join The Spark" formId="9350755" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
