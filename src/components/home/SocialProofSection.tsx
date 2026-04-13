import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { getFeaturedTestimonials } from "@/lib/wordpress";

export async function SocialProofSection() {
  const featuredTestimonials = await getFeaturedTestimonials();
  return (
    <section
      className="bg-soft-plum section-padding"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Real women, real words"
          heading="What happens when someone finally understands."
          align="center"
          className="mb-16"
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
