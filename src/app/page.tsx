import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ValidationSection } from "@/components/home/ValidationSection";
import { ReframeSection } from "@/components/home/ReframeSection";
import { ThreePathsSection } from "@/components/home/ThreePathsSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { AboutSnippetSection } from "@/components/home/AboutSnippetSection";
import { NewsletterCTASection } from "@/components/home/NewsletterCTASection";
import { getSiteOptions } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Unmasked & Untamed | For the Woman Who Is Done Pretending",
  description:
    "Perimenopause education for neurodivergent women. Free video library, community, and the Her Sacred Fire program. Built by Lia Dominique.",
};

export const revalidate = 86400;

export default async function HomePage() {
  const siteOptions = await getSiteOptions();

  return (
    <>
      <HeroSection
        headline={siteOptions.heroHeadline}
        subheadline={siteOptions.heroSubheadline}
      />
      <ValidationSection />
      <ReframeSection />
      <ThreePathsSection />
      <SocialProofSection />
      <AboutSnippetSection />
      <NewsletterCTASection />
    </>
  );
}
