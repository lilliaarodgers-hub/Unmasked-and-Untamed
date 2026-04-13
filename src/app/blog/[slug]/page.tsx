import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { getBlogPost, getBlogSlugs } from "@/lib/wordpress";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

const layerColors: Record<string, "plum" | "gold" | "terracotta"> = {
  Foundation: "plum",
  Understanding: "plum",
  Excavation: "terracotta",
  Skills: "gold",
  Integration: "gold",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-16" aria-labelledby="post-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-sacred-cream/50 hover:text-warm-gold transition-colors mb-8"
            >
              <ArrowLeft className="size-3" aria-hidden="true" />
              Back to blog
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant={layerColors[post.layer] ?? "plum"} className="text-xs">
                {post.layer}
              </Badge>
              <span className="font-body text-xs text-sacred-cream/50">{post.date}</span>
              <div className="flex items-center gap-1 text-sacred-cream/50">
                <Clock className="size-3" aria-hidden="true" />
                <span className="font-body text-xs">{post.readTime}</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              id="post-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight"
            >
              {post.title}
            </h1>
          </AnimatedSection>

          {post.excerpt && (
            <AnimatedSection delay={0.2}>
              <p className="mt-6 font-body text-lg text-sacred-cream/60 leading-relaxed">
                {post.excerpt}
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Article body */}
      <article className="bg-sacred-cream section-padding" aria-label="Post content">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {post.content ? (
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-light prose-headings:text-deep-plum
                prose-p:font-body prose-p:text-dark-plum/80 prose-p:leading-relaxed
                prose-a:text-warm-gold prose-a:underline hover:prose-a:text-deep-plum
                prose-strong:text-deep-plum prose-strong:font-semibold
                prose-blockquote:border-l-warm-gold prose-blockquote:text-plum-muted prose-blockquote:font-heading prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="font-body text-plum-muted text-center py-12">
              Full post content coming soon.
            </p>
          )}

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm text-deep-plum hover:text-warm-gold transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to The Spark Archive
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
