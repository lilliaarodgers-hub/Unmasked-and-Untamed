import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Calendar, MessageCircle, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export const metadata: Metadata = {
  title: "You're In — Her Sacred Fire",
  description: "Your enrollment in Her Sacred Fire is confirmed. Here's what happens next.",
};

const nextSteps = [
  {
    icon: Mail,
    title: "Check your inbox",
    body: "A confirmation email is on its way with your receipt and a welcome message from Lia. Check your spam folder if it doesn't arrive within a few minutes.",
  },
  {
    icon: Calendar,
    title: "Save the cohort dates",
    body: "Your welcome email includes the full cohort schedule, live call dates, module release windows, and how to access the cohort community space.",
  },
  {
    icon: Users,
    title: "You'll be introduced to your cohort",
    body: "Before the program begins, you'll receive an invitation to the private cohort space where you can start connecting with the women you'll be doing this with.",
  },
  {
    icon: MessageCircle,
    title: "Lia will reach out personally",
    body: "Lia reads every application. You'll receive a personal note from her before the cohort begins — she wants to know where you're starting from.",
  },
];

export default function ApplyThankYouPage() {
  return (
    <>
      <section className="bg-deep-plum pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-warm-gold/5 blur-3xl pointer-events-none"
        />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center justify-center size-16 rounded-full bg-warm-gold/10 border border-warm-gold/30">
                <CheckCircle2 className="size-7 text-warm-gold" />
              </span>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-4">
              Enrollment confirmed
            </p>
            <h1 className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6">
              You&apos;re in.
            </h1>
            <p className="font-body text-base text-sacred-cream/65 leading-relaxed max-w-lg mx-auto">
              This was a brave thing to do. Choosing yourself, really choosing yourself,
              is not always easy. We are glad you&apos;re here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-sacred-cream section-padding">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-4">
              What happens next
            </p>
            <h2 className="font-heading font-light text-section text-deep-plum leading-tight">
              Here&apos;s what to expect.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-5">
            {nextSteps.map(({ icon: Icon, title, body }, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-5 rounded-xl border border-border bg-white p-6">
                  <span className="flex shrink-0 items-center justify-center size-10 rounded-full bg-warm-gold/10 mt-0.5">
                    <Icon className="size-4 text-warm-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-light text-deep-plum mb-1">{title}</h3>
                    <p className="font-body text-sm text-dark-plum/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-14 rounded-2xl border border-warm-gold/30 bg-white p-8 text-center">
            <p className="font-heading text-lg font-light text-deep-plum mb-2">
              Have a question before we begin?
            </p>
            <p className="font-body text-sm text-plum-muted mb-6 leading-relaxed">
              Reach Lia directly at{" "}
              <a
                href="mailto:lia@unmaskedanduntamed.com"
                className="text-warm-gold underline underline-offset-2 hover:text-deep-plum transition-colors"
              >
                lia@unmaskedanduntamed.com
              </a>
            </p>
            <Button asChild variant="gold" size="lg">
              <Link href="/her-sacred-fire">Back to the program page</Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <OrnamentsRow className="mt-14" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
