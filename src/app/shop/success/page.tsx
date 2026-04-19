import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purchase Complete — Unmasked & Untamed",
  description: "Your digital download is on its way.",
};

export default function ShopSuccessPage() {
  return (
    <section className="bg-sacred-cream min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-warm-gold/10 p-4">
            <CheckCircle2 className="size-10 text-warm-gold" />
          </div>
        </div>

        <h1 className="font-heading font-light text-3xl text-deep-plum mb-4">
          You&rsquo;re all set.
        </h1>

        <p className="font-body text-base text-dark-plum/65 leading-relaxed mb-8">
          Your purchase is confirmed and your download link has been sent to your
          email. Check your inbox — and your spam folder if it doesn&rsquo;t arrive
          within a few minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="gold" size="lg">
            <Link href="/shop">Browse more resources</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/library">Visit the Free Library</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
