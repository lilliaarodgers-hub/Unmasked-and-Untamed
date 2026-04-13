"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  className?: string;
  variant?: "light" | "dark";
  placeholder?: string;
  ctaLabel?: string;
  formId: string;
}

export function NewsletterSignup({
  className,
  variant = "light",
  placeholder = "Your email address",
  ctaLabel = "Subscribe",
  formId,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, formId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-3 rounded-xl p-6 text-center",
          variant === "dark"
            ? "bg-white/10 text-sacred-cream"
            : "bg-soft-plum text-deep-plum",
          className
        )}
      >
        <span aria-hidden="true" className="text-3xl text-warm-gold">✦</span>
        <p className="font-heading text-lg italic">You&rsquo;re on the list.</p>
        <p className={cn("font-body text-sm", variant === "dark" ? "text-sacred-cream/70" : "text-plum-muted")}>
          Your first issue of The Spark will arrive soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-3", className)}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className={cn(
            "flex-1 rounded-md border px-4 py-2.5 font-body text-sm outline-none transition-colors focus:ring-2 focus:ring-warm-gold disabled:opacity-60",
            variant === "dark"
              ? "border-white/20 bg-white/10 text-sacred-cream placeholder:text-sacred-cream/50"
              : "border-border bg-white text-dark-plum placeholder:text-plum-muted/60"
          )}
        />
        <Button
          type="submit"
          variant={variant === "dark" ? "gold" : "default"}
          size="default"
          disabled={loading}
          className="shrink-0"
        >
          {loading ? "Sending…" : ctaLabel}
        </Button>
      </div>
      {error && (
        <p className={cn("font-body text-xs", variant === "dark" ? "text-warm-gold" : "text-ember-terracotta")}>
          {error}
        </p>
      )}
    </form>
  );
}
