import type { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Lia",
  description:
    "VIP coaching, corporate wellness, speaking engagements, and media enquiries. Work directly with Lia Dominique.",
};

const offerings = [
  {
    id: "vip",
    title: "VIP Coaching",
    subtitle: "One-to-one, deep, bespoke.",
    description:
      "For the woman who needs the full programme experience with direct one-to-one access. VIP coaching is a 3-month intensive that combines the Her Sacred Fire curriculum with weekly one-to-one sessions, unlimited voice note access, and a personalised workbook.",
    whoFor:
      "For women who want the depth of the programme plus direct, continuous access to Lia. Limited spaces each quarter.",
    cta: "Enquire about VIP coaching",
    email: "vip@unmaskedanduntamed.com",
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    subtitle: "For employers who want to retain their neurodivergent talent.",
    description:
      "The business case for perimenopause support is clear: the majority of women leaving the workforce in their 40s and 50s cite perimenopause symptoms as a contributing factor. For neurodivergent employees, the impact is compounded.",
    whoFor:
      "Unmasked & Untamed offers workplace education sessions, manager training, and organisational audits for organisations that want to lead on neurodivergent perimenopause inclusion.",
    cta: "Request a corporate enquiry pack",
    email: "corporate@unmaskedanduntamed.com",
  },
  {
    id: "speaking",
    title: "Speaking",
    subtitle: "Keynotes, panels, and workshops.",
    description:
      "Lia speaks on neurodivergent perimenopause, the intersection of ADHD and hormonal transition, research literacy for women's health, and the gap in healthcare provision for neurodivergent women of colour.",
    whoFor:
      "Conferences, corporate events, healthcare organisations, educational institutions, and community organisations. Virtual and in-person.",
    cta: "Submit a speaking enquiry",
    email: "speaking@unmaskedanduntamed.com",
  },
  {
    id: "media",
    title: "Media",
    subtitle: "Press, podcast, and editorial.",
    description:
      "Lia is available for media appearances, podcast interviews, editorial contributions, and expert commentary on perimenopause, neurodivergence, women's health, and the intersections between them.",
    whoFor:
      "Journalists, podcast producers, editors, and content creators working on women's health, neurodivergence, or midlife experience.",
    cta: "Download press kit & contact",
    email: "media@unmaskedanduntamed.com",
  },
];

export default function WorkWithLiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="work-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Work With Lia
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="work-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              Beyond the programme.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto">
              VIP coaching, corporate wellness, speaking, and media. Multiple ways
              to work with Lia directly or bring her expertise to your organisation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-sacred-cream section-padding" aria-label="Work offerings">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <StaggerContainer className="flex flex-col gap-12">
            {offerings.map((offering, i) => (
              <StaggerItem key={offering.id}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                  {/* Accent card */}
                  <div
                    className={`rounded-2xl p-8 ${
                      i % 2 === 0
                        ? "bg-deep-plum"
                        : i % 3 === 1
                        ? "bg-soft-plum"
                        : "bg-ember-terracotta/10 border border-ember-terracotta/20"
                    }`}
                  >
                    <p
                      className={`font-body text-xs uppercase tracking-widest font-semibold mb-3 ${
                        i % 2 === 0 ? "text-warm-gold" : "text-warm-gold"
                      }`}
                    >
                      {offering.id.toUpperCase()}
                    </p>
                    <h2
                      className={`font-heading text-section font-light leading-tight mb-3 ${
                        i % 2 === 0 ? "text-sacred-cream" : "text-deep-plum"
                      }`}
                    >
                      {offering.title}
                    </h2>
                    <p
                      className={`font-heading italic text-base ${
                        i % 2 === 0 ? "text-warm-gold/80" : "text-plum-muted"
                      }`}
                    >
                      {offering.subtitle}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-5 justify-center">
                    <p className="font-body text-base text-dark-plum/70 leading-relaxed">
                      {offering.description}
                    </p>
                    <p className="font-body text-sm text-plum-muted leading-relaxed">
                      {offering.whoFor}
                    </p>
                    <Button asChild variant="outline-gold" size="default" className="w-fit">
                      <a
                        href={`mailto:${offering.email}`}
                        className="flex items-center gap-2"
                      >
                        <Mail className="size-4" aria-hidden="true" />
                        {offering.cta}
                      </a>
                    </Button>
                  </div>
                </div>

                {i < offerings.length - 1 && <OrnamentsRow className="mt-12" />}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
