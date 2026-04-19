import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StartHereSection } from "@/components/library/StartHereSection";
import { LibraryLayerTabs } from "@/components/library/LibraryLayerTabs";
import { ThematicPaths } from "@/components/library/ThematicPaths";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getLibraryLayers, getStartHereVideos } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Free Video Library",
  description:
    "The most comprehensive free perimenopause education library built for neurodivergent women. 290 videos across five layers. Start wherever your most urgent question lives.",
};

export const revalidate = 86400;

export default async function LibraryPage() {
  const [layers, startHereVideos] = await Promise.all([
    getLibraryLayers(),
    getStartHereVideos(),
  ]);
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="library-hero-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-gold font-semibold mb-6">
              Free Video Library
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              id="library-hero-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-8"
            >
              The most comprehensive
              <br />
              <em className="italic text-warm-gold">free perimenopause library</em>
              <br />
              for neurodivergent women.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed mb-10 max-w-2xl mx-auto">
              290 videos. Five layers. One library organised so you can start
              exactly where your most urgent question lives, and never have to
              see all 290 at once.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="gold">
              <a href="#start-here">Start with the Start Here videos</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sacred-cream/30 text-sacred-cream hover:bg-sacred-cream/10 hover:text-sacred-cream"
            >
              <a href="#layers">Browse all five layers</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-dark-plum border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            {[
              { value: "290+", label: "Videos" },
              { value: "5", label: "Layers" },
              { value: "30+", label: "Topic series" },
              { value: "Free", label: "Always" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-2xl font-light text-warm-gold">
                  {stat.value}
                </span>
                <span className="font-body text-xs uppercase tracking-widest text-sacred-cream/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Here */}
      <StartHereSection videos={startHereVideos} />

      {/* Thematic entry points */}
      <ThematicPaths />

      {/* Layer tabs */}
      <div id="layers">
        <LibraryLayerTabs layers={layers} />
      </div>

      {/* Community CTA */}
      <section className="bg-deep-plum section-padding">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-warm-gold mb-4">
            The Fire Circle
          </p>
          <h2 className="font-heading font-light text-section text-sacred-cream leading-tight mb-6">
            You don&rsquo;t have to consume this library alone.
          </h2>
          <p className="font-body text-base text-sacred-cream/60 leading-relaxed mb-8">
            The Fire Circle is the free community where women who are watching
            these videos come together, to talk, to process, to find each other.
          </p>
          <Button asChild size="lg" variant="gold">
            <Link href="/fire-circle">Join The Fire Circle — Free</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
