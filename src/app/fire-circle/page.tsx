import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { COMMUNITY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Fire Circle — Free Community",
  description:
    "The Fire Circle is the free community for neurodivergent women in perimenopause. No sales funnel. No constant pitching. Just real women doing the real work.",
};

const agreements = [
  "We name our experiences honestly — without performing positivity.",
  "We respect each other's nervous systems — no hot takes, no pile-ons.",
  "We hold each other's stories with care — what is shared here stays here.",
  "We are allowed to be in process — not every question needs an answer right now.",
  "We do not give unsolicited medical advice — we share our experiences and research.",
];

const notList = [
  "A sales funnel where you will be constantly pitched the program",
  "A space where you need a diagnosis to belong",
  "A positive vibes only zone",
  "A space run by algorithms — it is human moderated",
  "A substitute for professional medical or therapeutic support",
];

export default function FireCirclePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="fire-circle-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Community
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="fire-circle-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              {COMMUNITY_NAME}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto">
              You do not have to do this alone. The Fire Circle is the free community
              where neurodivergent women in perimenopause come together — to talk,
              to process, and to finally be understood.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="what-it-is-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What this is"
            heading="A room full of women who get it."
            align="left"
            className="mb-10"
          />

          {[
            "The Fire Circle is the free community attached to Unmasked & Untamed. It is for any woman who is navigating the intersection of neurodivergence and perimenopause — whether she has a formal diagnosis or not, whether she has found Lia's work last week or three years ago.",
            "The community is organised around the five layers of the library, with spaces for each layer's topics, a space for weekly check-ins, a space for research questions, and a space for the 3am moments when you need someone to say 'me too.'",
            "It is free. It always will be. The Fire Circle is not a funnel — it is a community. Women are not there to be sold to. They are there to be in community with each other.",
          ].map((para, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <p className="font-body text-base text-dark-plum/70 leading-relaxed mb-5">
                {para}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What it's not */}
      <section className="bg-soft-plum section-padding" aria-labelledby="what-its-not-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Important"
            heading="What The Fire Circle is not."
            align="left"
            className="mb-10"
          />

          <StaggerContainer className="flex flex-col gap-3">
            {notList.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 rounded-full border-2 border-plum-muted shrink-0"
                  />
                  <p className="font-body text-sm text-dark-plum/70 leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community agreements */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="agreements-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we show up"
            heading="Community agreements."
            align="left"
            className="mb-10"
          />

          <StaggerContainer className="flex flex-col gap-3">
            {agreements.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
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

      {/* Join CTA */}
      <section className="bg-deep-plum section-padding">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-light text-section text-sacred-cream leading-tight mb-6">
              Come and find your people.
            </h2>
            <p className="font-body text-base text-sacred-cream/60 leading-relaxed mb-10">
              Free to join. No credit card. No obligation. Just a community of women
              who understand exactly what you have been living.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Button asChild size="xl" variant="gold">
              <Link href="/join-fire-circle">Join The Fire Circle — Free</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
