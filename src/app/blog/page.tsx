import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { getBlogPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog — The Spark Archive",
  description:
    "Long-form perimenopause education from Lia Dominique. Each post goes deeper into the research and lived experience behind the free video library.",
};

// Revalidate every hour; also revalidated on-demand via /api/revalidate
export const revalidate = 3600;

const layerColors: Record<string, "plum" | "gold" | "terracotta"> = {
  Foundation: "plum",
  Understanding: "plum",
  Excavation: "terracotta",
  Skills: "gold",
  Integration: "gold",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Blog
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="blog-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              The Spark Archive
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto">
              Long-form education going deeper into the perimenopause and
              neurodivergence intersection. Every post is grounded in research,
              written for the woman who wants more than a summary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-sacred-cream section-padding" aria-label="Blog posts">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest posts"
            heading="Recent writing."
            align="left"
            className="mb-12"
          />

          {posts.length === 0 ? (
            <p className="font-body text-plum-muted text-center py-12">
              Posts coming soon — subscribe to The Spark to be notified.
            </p>
          ) : (
            <StaggerContainer className="flex flex-col gap-0">
              {posts.map((post) => (
                <StaggerItem key={post.id}>
                  <article className="border-b border-border py-10 last:border-0 group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <Badge variant={layerColors[post.layer] ?? "plum"} className="text-xs">
                            {post.layer}
                          </Badge>
                          <span className="font-body text-xs text-plum-muted">{post.date}</span>
                          <div className="flex items-center gap-1 text-plum-muted">
                            <Clock className="size-3" aria-hidden="true" />
                            <span className="font-body text-xs">{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className="font-heading text-2xl font-light text-deep-plum leading-snug group-hover:text-deep-plum/70 transition-colors">
                          {post.title}
                        </h2>

                        <p className="font-body text-sm text-dark-plum/60 leading-relaxed max-w-2xl">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-deep-plum font-body text-sm font-medium group-hover:text-warm-gold transition-colors">
                          Read post
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </div>
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
}
