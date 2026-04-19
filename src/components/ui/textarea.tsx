import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-border bg-white px-4 py-3 font-body text-sm text-dark-plum placeholder:text-plum-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold/40 focus-visible:border-warm-gold disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
