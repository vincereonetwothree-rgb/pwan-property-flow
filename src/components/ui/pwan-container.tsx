import * as React from "react"
import { cn } from "@/lib/utils"

interface PWANContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide"
}

const PWANContainer = React.forwardRef<HTMLDivElement, PWANContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      default: "container-pwan", // max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8
      narrow: "mx-auto px-4 md:px-6 lg:px-8 max-w-4xl",
      wide: "mx-auto px-4 md:px-6 lg:px-8 max-w-7xl",
    }

    return (
      <div
        ref={ref}
        className={cn(sizeClasses[size], className)}
        {...props}
      />
    )
  }
)
PWANContainer.displayName = "PWANContainer"

export { PWANContainer }