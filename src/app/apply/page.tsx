"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export default function ApplyPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", whyInvest: "", whyNow: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        router.push(data.url);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-deep-plum pt-32 pb-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-warm-gold/5 blur-3xl pointer-events-none"
        />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold font-semibold mb-6">
              Her Sacred Fire — Cohort 4
            </p>
            <h1 className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6">
              Apply
            </h1>
            <p className="font-body text-base text-sacred-cream/60 leading-relaxed max-w-lg mx-auto">
              Tell me a little about where you are. There are no wrong answers here —
              only honesty, and honesty is exactly what this program is built for.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-sacred-cream section-padding">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">

              <div>
                <Label htmlFor="name">Your full name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="First and last name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <Label htmlFor="whyInvest">
                  Why do you want to make this investment in yourself?
                </Label>
                <p className="font-body text-xs text-plum-muted mb-2 leading-relaxed">
                  What has brought you to this point? What are you hoping this changes for you?
                </p>
                <Textarea
                  id="whyInvest"
                  name="whyInvest"
                  placeholder="Take your time with this one..."
                  value={form.whyInvest}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="whyNow">Why now?</Label>
                <p className="font-body text-xs text-plum-muted mb-2 leading-relaxed">
                  What is happening in your life right now that makes this the moment?
                </p>
                <Textarea
                  id="whyNow"
                  name="whyNow"
                  placeholder="What has shifted? What can no longer wait?"
                  value={form.whyNow}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              {error && (
                <p className="font-body text-sm text-ember-terracotta rounded-lg border border-ember-terracotta/20 bg-ember-terracotta/5 px-4 py-3">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={loading}
                className="w-full"
              >
                {loading ? "Preparing your enrollment…" : "Submit my application"}
              </Button>

              <p className="font-body text-xs text-plum-muted/70 text-center leading-relaxed">
                After submitting you will be taken to secure payment to complete your enrollment.
                Payment plans are available at checkout.
              </p>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <OrnamentsRow className="mt-16" />
            <p className="mt-6 font-body text-xs text-plum-muted/60 text-center leading-relaxed">
              Her Sacred Fire is an educational and coaching program. Lia Dominique is a coach
              and educator, not a medical provider.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
