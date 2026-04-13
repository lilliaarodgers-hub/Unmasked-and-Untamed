import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Users, Calendar, MessageCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSiteOptions, getFeaturedTestimonials } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Her Sacred Fire — The Program",
  description:
    "Her Sacred Fire is the 10-week whole-woman perimenopause program built specifically for neurodivergent women. Small cohort. Deep transformation. The program that has never existed before.",
};

export const revalidate = 86400;

const pillarColors: Record<string, string> = {
  body: "bg-ember-terracotta/10 text-ember-terracotta border-ember-terracotta/20",
  mind: "bg-deep-plum/10 text-deep-plum border-deep-plum/20",
  soul: "bg-warm-gold/10 text-dark-plum border-warm-gold/30",
  "nervous-system": "bg-soft-plum text-plum-muted border-plum-light",
};

export default async function HerSacredFirePage() {
  const [siteOptions, featuredTestimonials] = await Promise.all([
    getSiteOptions(),
    getFeaturedTestimonials(),
  ]);
  const { programModules, programFaqs: programFAQs, programIncludes, programIsForYou } = siteOptions;
  return (
    <>
      {/* Hero */}
      <section
        className="bg-deep-plum pt-32 pb-24 relative overflow-hidden"
        aria-labelledby="program-hero-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-deep-plum via-deep-plum to-dark-plum pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-warm-gold/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge variant="gold" className="mb-6 text-xs tracking-wider">
              Now Enrolling — Cohort 4
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              id="program-hero-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              Her Sacred Fire
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-heading italic text-xl text-warm-gold/80 mb-8">
              The Whole-Woman Perimenopause Program Built for Neurodivergent Women
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed mb-12 max-w-2xl mx-auto">
              10 weeks. Small cohort. Deep transformation. The program that has
              never existed before — because you have never been the woman anyone
              built a program for.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="gold">
              <a href="#apply">Apply for the Next Cohort</a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-sacred-cream/30 text-sacred-cream hover:bg-sacred-cream/10 hover:text-sacred-cream"
            >
              <a href="#what-is-included">See what&rsquo;s included</a>
            </Button>
          </AnimatedSection>

          {/* Program stats */}
          <AnimatedSection delay={0.4} className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Calendar, value: "10 weeks", label: "Program length" },
              { icon: Users, value: "Max 20", label: "Cohort size" },
              { icon: MessageCircle, value: "10 live", label: "Group calls" },
              { icon: Award, value: "19", label: "Deep modules" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 py-5 px-4"
              >
                <Icon className="size-4 text-warm-gold mb-1" aria-hidden="true" />
                <span className="font-heading text-xl font-light text-sacred-cream">{value}</span>
                <span className="font-body text-xs text-sacred-cream/45 text-center">{label}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Is This You? */}
      <section
        className="bg-sacred-cream section-padding"
        aria-labelledby="is-this-you-heading"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Is this you?"
            heading="You belong here if..."
            align="center"
            className="mb-14"
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {programIsForYou.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                  <CheckCircle2
                    className="size-4 text-warm-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="font-body text-sm text-dark-plum/75 leading-relaxed">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-soft-plum section-padding" aria-labelledby="what-it-is-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              The experience
            </p>
            <h2
              id="what-it-is-heading"
              className="font-heading font-light text-section text-deep-plum leading-tight mb-10"
            >
              What Her Sacred Fire actually is.
            </h2>
          </AnimatedSection>

          {[
            "Her Sacred Fire is a 10-week container. Not a course you consume alone. Not a list of videos you will never watch. A container — with Lia, with a small cohort of women who are navigating the same intersection, and with the specific combination of science, soul, and nervous system support that exists nowhere else.",
            "Each week builds on the last. The modules are dense and researched. The live calls are where the integration happens — where you bring your actual life to the material and Lia helps you see it clearly.",
            "The cohort is small deliberately. Lia will know your name. The women in your cohort will know your story. By the end of 10 weeks, you will have something most neurodivergent perimenopausal women have never had: a room full of people who understand exactly what you have been living.",
            "This program does not require you to perform wellness. It does not require you to be positive. It requires you to show up — imperfectly, honestly, and as you actually are.",
          ].map((para, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)}>
              <p className="font-body text-base text-dark-plum/70 leading-relaxed mb-6 text-left">
                {para}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section
        className="bg-sacred-cream section-padding"
        aria-labelledby="modules-heading"
        id="what-is-included"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="19 modules"
            heading="The full curriculum."
            subheading="Body. Mind. Soul. Nervous System. Every dimension of the perimenopause experience — built for the neurodivergent woman."
            align="center"
            className="mb-14"
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programModules.map((mod) => (
              <StaggerItem key={mod.number}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-5 h-full">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-heading text-3xl font-light text-deep-plum/20 leading-none">
                      {String(mod.number).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-body font-medium ${pillarColors[mod.pillar]}`}
                    >
                      {mod.pillar.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-light text-deep-plum leading-snug">
                    {mod.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {mod.themes.map((theme) => (
                      <li
                        key={theme}
                        className="font-body text-xs text-plum-muted flex items-center gap-2"
                      >
                        <span className="h-px w-3 bg-warm-gold/50 shrink-0" />
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-deep-plum section-padding" aria-labelledby="includes-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Everything included"
            heading="What you receive."
            align="center"
            className="mb-14"
            light
          />

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {programIncludes.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-heading text-warm-gold text-lg leading-none"
                  >
                    ✦
                  </span>
                  <p className="font-body text-sm text-sacred-cream/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-soft-plum section-padding" aria-labelledby="program-testimonials-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="From the cohorts"
            heading="The transformation in their words."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            heading="Honestly answered."
            align="center"
            className="mb-14"
          />

          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {programFAQs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-white px-6"
              >
                <AccordionTrigger className="font-heading text-base font-light text-deep-plum py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-body text-sm text-dark-plum/70 leading-relaxed pb-2">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-soft-plum section-padding" aria-labelledby="investment-heading">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              The Investment
            </p>
            <h2
              id="investment-heading"
              className="font-heading font-light text-section text-deep-plum leading-tight mb-6"
            >
              This is an investment in
              <br />
              <em className="italic">understanding yourself.</em>
            </h2>
            <p className="font-body text-base text-dark-plum/65 leading-relaxed mb-10">
              The full investment for Her Sacred Fire and all payment plan options
              are shared during the application process. If you are on the waitlist,
              you will receive early-bird pricing with your enrollment invitation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-warm-gold/30 bg-white p-8 mb-8">
              <p className="font-body text-sm text-plum-muted mb-4">
                All options include lifetime access to recordings and materials, full program workbook, community access, and alumni network.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="font-body text-sm text-dark-plum">Full investment</span>
                  <span className="font-heading text-lg text-deep-plum">Shared on application</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-body text-sm text-dark-plum">Payment plan available</span>
                  <CheckCircle2 className="size-4 text-warm-gold" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Application CTA */}
      <section
        id="apply"
        className="bg-deep-plum section-padding"
        aria-labelledby="apply-heading"
      >
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="apply-heading"
              className="font-heading font-light text-display text-sacred-cream leading-tight mb-6"
            >
              Ready to stop surviving this
              <br />
              <em className="italic">and start understanding it?</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-body text-base text-sacred-cream/60 leading-relaxed mb-10">
              Apply for the next cohort. Cohorts are small — applications close
              when the cohort fills. Waitlist members receive first notification
              when enrollment opens.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="gold">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-sacred-cream/30 text-sacred-cream hover:bg-sacred-cream/10 hover:text-sacred-cream"
            >
              <Link href="/waitlist">Join the Waitlist</Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <OrnamentsRow className="mt-14" />
            <p className="mt-6 font-body text-xs text-sacred-cream/30 max-w-lg mx-auto leading-relaxed">
              Her Sacred Fire is an educational and coaching program. Lia Dominique
              is a coach and educator, not a medical provider. This program does not
              replace medical care. Please continue working with your healthcare
              provider.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
