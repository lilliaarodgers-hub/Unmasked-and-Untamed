"use client";

import { useState } from "react";
import { CheckCircle2, Download, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { products } from "@/data/shop";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(0)}`;
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: product.stripePriceId, productName: product.name }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-white p-8 h-full">
      {product.badge && (
        <div className="absolute -top-3 left-6">
          <Badge variant="gold" className="text-xs tracking-wider">
            {product.badge}
          </Badge>
        </div>
      )}

      <div className="flex items-start gap-3 mb-4">
        <div className="rounded-full bg-warm-gold/10 p-2 shrink-0">
          <Download className="size-4 text-warm-gold" aria-hidden="true" />
        </div>
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-plum-muted mb-1">
            Digital Download
          </p>
          <h2 className="font-heading text-xl font-light text-deep-plum leading-snug">
            {product.name}
          </h2>
        </div>
      </div>

      <p className="font-body text-sm text-dark-plum/65 leading-relaxed mb-6">
        {product.description}
      </p>

      <ul className="flex flex-col gap-2 mb-8">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 className="size-3.5 text-warm-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span className="font-body text-xs text-dark-plum/70">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="font-heading text-3xl font-light text-deep-plum">
            {formatPrice(product.price)}
          </span>
          <span className="font-body text-xs text-plum-muted">one-time</span>
        </div>

        <Button
          onClick={handleBuy}
          disabled={loading}
          size="lg"
          variant="gold"
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" />
              Redirecting…
            </>
          ) : (
            `Get Instant Access — ${formatPrice(product.price)}`
          )}
        </Button>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-plum pt-32 pb-20" aria-labelledby="shop-heading">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Digital Assets
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              id="shop-heading"
              className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6"
            >
              Resources Built for
              <br />
              <em className="italic">the way you think.</em>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-lg text-sacred-cream/65 leading-relaxed max-w-2xl mx-auto">
              Downloadable guides, workbooks, and frameworks, everything Lia has
              distilled from years of research and lived experience, yours to keep.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="bg-sacred-cream section-padding" aria-label="Digital products">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Instant download"
            heading="Everything available now."
            subheading="Secure checkout via Stripe. Immediate access after purchase."
            align="center"
            className="mb-16"
          />

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-soft-plum py-12" aria-label="Purchase assurance">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
            {[
              { title: "Secure checkout", body: "Payments processed by Stripe — your card details never touch this server." },
              { title: "Instant access", body: "Your download link is delivered immediately after purchase." },
              { title: "Lifetime access", body: "Download once, keep forever. Updates included at no extra charge." },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <p className="font-heading text-sm font-light text-deep-plum">{title}</p>
                <p className="font-body text-xs text-dark-plum/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
