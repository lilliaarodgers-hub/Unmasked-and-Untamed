import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "block font-body text-sm font-medium text-dark-plum mb-1.5 leading-snug",
        className
      )}
      {...props}
    />
  );
}

export { Label };
