"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { OrnamentsRow } from "@/components/shared/BrandDivider";

export default function WaitlistPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/waitlist/thank-you");
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
              Her Sacred Fire
            </p>
            <h1 className="font-heading font-light text-hero text-sacred-cream leading-tight mb-6">
              Join the Waitlist
            </h1>
            <p className="font-body text-base text-sacred-cream/60 leading-relaxed max-w-lg mx-auto">
              Cohorts are small and fill quickly. Waitlist members are notified first when
              enrollment opens and receive access to early-bird investment options.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-sacred-cream section-padding">
        <div className="mx-auto max-w-md px-6 lg:px-8">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

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
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
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
                {loading ? "Adding you to the list…" : "Join the waitlist"}
              </Button>

              <p className="font-body text-xs text-plum-muted/70 text-center leading-relaxed">
                No spam. We contact you when enrollment opens - that&apos;s it.
              </p>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <OrnamentsRow className="mt-14" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
