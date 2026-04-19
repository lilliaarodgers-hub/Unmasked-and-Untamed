import type { Metadata } from "next";
import Link from "next/link";
import { Bell, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export const metadata: Metadata = {
  title: "You're on the Waitlist — Her Sacred Fire",
  description: "You're on the Her Sacred Fire waitlist. We'll be in touch when enrollment opens.",
};

const whatToExpect = [
  {
    icon: Mail,
    title: "Confirmation in your inbox",
    body: "A confirmation email is on its way. It will include a little more about the program and what to expect when enrollment opens.",
  },
  {
    icon: Bell,
    title: "First notification when enrollment opens",
    body: "You'll hear before anyone else. Waitlist members get first access — we won't open publicly until waitlist members have had time to secure their spot.",
  },
  {
    icon: Users,
    title: "Early-bird investment options",
    body: "Waitlist members receive access to early-bird pricing. This is our way of honouring the women who trust us before enrollment even opens.",
  },
];

export default function WaitlistThankYouPage() {
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
                <Bell className="size-7 text-warm-gold" />
              </span>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-4">
              You're on the list
            </p>
            <h1 className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6">
              We'll see you
              <br />
              <em className="italic">when enrollment opens.</em>
            </h1>
            <p className="font-body text-base text-sacred-cream/65 leading-relaxed max-w-lg mx-auto">
              Thank you for raising your hand. It matters. You'll be the first to
              know when the next cohort opens for enrollment.
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
              Here's what to expect.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-5">
            {whatToExpect.map(({ icon: Icon, title, body }, i) => (
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

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <p className="font-body text-sm text-plum-muted mb-6 leading-relaxed">
              While you wait, explore the free resources and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gold" size="lg">
                <Link href="/fire-circle">Join The Fire Circle (free)</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/her-sacred-fire">Read about the program</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <OrnamentsRow className="mt-14" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
