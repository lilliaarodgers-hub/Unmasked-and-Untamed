import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-sacred-cream min-h-screen flex items-center justify-center pt-16">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="font-heading text-8xl font-light text-deep-plum/10 mb-4">404</p>
        <h1 className="font-heading text-display font-light text-deep-plum leading-tight mb-4">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="font-body text-base text-dark-plum/60 leading-relaxed mb-10">
          But you do — and so does everything in the free library. Let&rsquo;s get you somewhere useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/library">Explore the library</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
