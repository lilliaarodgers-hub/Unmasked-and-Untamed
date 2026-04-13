import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BrandDivider } from "@/components/shared/BrandDivider";

export function AboutSnippetSection() {
  return (
    <section
      className="bg-sacred-cream section-padding"
      aria-labelledby="about-snippet-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image placeholder */}
          <AnimatedSection direction="right">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-soft-plum to-plum-light max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <p className="font-heading text-xl italic text-deep-plum/40">
                  Lia Dominique
                </p>
              </div>
              {/* Decorative corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 h-24 bg-warm-gold/10 rounded-bl-full"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-6">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-gold font-semibold">
                About Lia
              </p>

              <BrandDivider />

              <h2
                id="about-snippet-heading"
                className="font-heading font-light text-section text-deep-plum leading-tight"
              >
                She built this because
                <br />
                <em className="italic">no one else did.</em>
              </h2>

              <p className="font-body text-base text-dark-plum/70 leading-relaxed">
                In a parking garage in 2021, Lia sat in her car for forty minutes
                because she could not make herself walk inside. She had been
                experiencing symptoms for three years. She had seen seven doctors.
                She had been told she had anxiety, depression, burnout, and
                &ldquo;stress.&rdquo; She had not been told she was in perimenopause.
                She had not been told her ADHD symptoms were being amplified by
                estrogen decline. She had not been told that any of this was
                connected.
              </p>

              <p className="font-body text-base text-dark-plum/70 leading-relaxed">
                That parking garage moment was the beginning of everything.
                Unmasked & Untamed is what she built so that no other woman
                has to sit in her car alone, without language for what is happening
                to her.
              </p>

              <Button
                asChild
                variant="ghost"
                className="justify-start px-0 text-deep-plum hover:text-warm-gold hover:bg-transparent font-body font-medium w-fit"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Read Lia&rsquo;s full story
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
