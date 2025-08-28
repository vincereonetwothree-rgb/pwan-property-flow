import * as React from "react"
import { cn } from "@/lib/utils"

interface PWANSectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "large" | "compact"
}

const PWANSection = React.forwardRef<HTMLElement, PWANSectionProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    const spacingClasses = {
      default: "section-spacing", // py-16 md:py-20 lg:py-24
      large: "py-24 md:py-32 lg:py-40",
      compact: "py-8 md:py-12 lg:py-16",
    }

    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      />
    )
  }
)
PWANSection.displayName = "PWANSection"

export { PWANSection }