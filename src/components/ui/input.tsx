import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-lg border border-border bg-white px-4 py-2 font-body text-sm text-dark-plum placeholder:text-plum-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold/40 focus-visible:border-warm-gold disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
