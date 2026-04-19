import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Research & Science",
  description:
    "The research underpinning Unmasked & Untamed. Key studies, evidence standards, and why research literacy matters for neurodivergent perimenopausal women.",
};

const resources = [
  {
    title: "The British Menopause Society Guidelines",
    description: "The most current evidence-based guidance on menopause management.",
    type: "Guidelines",
  },
  {
    title: "NICE Menopause Guideline (NG23)",
    description: "UK National Institute for Health and Care Excellence guidelines on menopause diagnosis and management.",
    type: "Guidelines",
  },
  {
    title: "Estrogen's Effects on the Serotonergic System (Fink et al.)",
    description: "The foundational research on how estrogen modulates serotonin, critical context for ND women.",
    type: "Research",
  },
  {
    title: "ADHD and Estrogen: Research Overview (Quinn & Madhoo)",
    description: "The key literature on why ADHD symptoms change across the hormonal lifespan.",
    type: "Research",
  },
  {
    title: "The WHI Study: What It Found and Why It Was Misreported",
    description: "Understanding the study that shaped two decades of HRT avoidance, and what it actually showed.",
    type: "Case Study",
  },
  {
    title: "Perimenopause and Neurodivergence: The Emerging Evidence",
    description: "Curated summary of the emerging research on the ND perimenopause intersection.",
    type: "Overview",
  },
];

const standards = [
  "Every factual claim is sourced to peer-reviewed research or established clinical guidance.",
  "Where evidence is limited or contested, that limitation is named explicitly.",
  "Research on neurodivergent women in perimenopause is extremely limited, where Lia extrapolates from related fields, this is clearly indicated.",
  "No affiliation with supplement companies, pharmaceutical companies, or other commercial healthcare interests.",
  "This platform does not provide medical advice. The research is provided to support informed conversations with healthcare providers.",
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="research-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Research & Science
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="research-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              The evidence
              <br />
              <em className="italic text-warm-gold">behind the education.</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto">
              Neurodivergent women in perimenopause deserve the same rigorous,
              evidence-based information that has historically been available only
              to neurotypical women. This page is the evidence base for everything
              taught here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why research literacy matters */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="why-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why this matters"
            heading="Research literacy is a self-advocacy tool."
            align="left"
            className="mb-10"
          />

          {[
            "Many neurodivergent women in perimenopause have been dismissed by healthcare providers who are either unfamiliar with the ND perimenopause intersection or who rely on outdated guidance. The best protection against that dismissal is the ability to read and evaluate the evidence yourself.",
            "The Reading the Research series, 10 videos in the free library, teaches you how to evaluate a study, how to read an abstract, what relative risk actually means, and how to identify when research findings have been misrepresented in the media.",
            "The WHI study is the most consequential example. A 2002 study that was misreported and misapplied, leading to two decades of avoidable suffering for women who were denied HRT on the basis of risk calculations that did not apply to them. Understanding what that study actually showed, and what it did not show, is essential context for any conversation with a healthcare provider about hormone therapy.",
          ].map((para, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <p className="font-body text-base text-dark-plum/70 leading-relaxed mb-5">{para}</p>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.3}>
            <Button asChild size="lg" className="mt-4">
              <Link href="/library">Watch the Reading the Research series — free</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Resource library */}
      <section className="bg-soft-plum section-padding" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curated resources"
            heading="Key studies and documents."
            subheading="A curated selection of the most important research and guidance documents relevant to the neurodivergent perimenopause experience."
            align="left"
            className="mb-12"
          />

          <StaggerContainer className="flex flex-col gap-4">
            {resources.map((res, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-5 rounded-xl border border-border bg-white p-5 group hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-start gap-3">
                      <h3 className="font-body font-medium text-dark-plum text-sm leading-snug flex-1">
                        {res.title}
                      </h3>
                      <span className="font-body text-xs text-plum-muted border border-border rounded-full px-2.5 py-0.5 shrink-0">
                        {res.type}
                      </span>
                    </div>
                    <p className="font-body text-xs text-plum-muted leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                  <ExternalLink className="size-4 text-plum-muted shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Research standards */}
      <section className="bg-sacred-cream section-padding" aria-labelledby="standards-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How this platform uses research"
            heading="The standards we hold."
            align="left"
            className="mb-10"
          />

          <div className="flex flex-col gap-0">
            {standards.map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <div className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                  <span aria-hidden="true" className="font-heading text-warm-gold text-xl leading-none shrink-0 mt-0.5">✦</span>
                  <p className="font-body text-sm text-dark-plum/70 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
