import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-spotify-green focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-spotify-dark text-white hover:bg-spotify-dark-highlight",
        secondary: "bg-spotify-dark-elevated text-neutral-200 hover:bg-spotify-dark-highlight",
        primary: "bg-spotify-green text-black hover:bg-spotify-green-bright",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-neutral-700 text-neutral-200 hover:bg-spotify-dark hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
