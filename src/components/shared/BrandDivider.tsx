import { cn } from "@/lib/utils";

interface BrandDividerProps {
  className?: string;
  variant?: "gold" | "plum" | "cream";
  width?: "sm" | "md" | "full";
}

export function BrandDivider({
  className,
  variant = "gold",
  width = "sm",
}: BrandDividerProps) {
  const colorClass = {
    gold: "bg-warm-gold",
    plum: "bg-deep-plum",
    cream: "bg-sacred-cream/40",
  }[variant];

  const widthClass = {
    sm: "w-12",
    md: "w-24",
    full: "w-full",
  }[width];

  return (
    <div
      aria-hidden="true"
      className={cn("h-px", colorClass, widthClass, className)}
    />
  );
}

export function OrnamentsRow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-3 justify-center", className)}
    >
      <div className="h-px w-12 bg-warm-gold/40" />
      <div className="h-1 w-1 rounded-full bg-warm-gold" />
      <div className="h-px w-12 bg-warm-gold/40" />
    </div>
  );
}
