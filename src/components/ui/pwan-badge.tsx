import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      intent: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        verified: "border-transparent bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80",
        progress: "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-100/80",
        neutral: "border-transparent bg-neutral-100 text-neutral-700 hover:bg-neutral-100/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function PWANBadge({ className, intent, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ intent }), className)} {...props} />
  )
}

export { PWANBadge, badgeVariants }