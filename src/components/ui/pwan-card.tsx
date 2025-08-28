import * as React from "react"

import { cn } from "@/lib/utils"

const PWANCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200",
      className
    )}
    {...props}
  />
))
PWANCard.displayName = "PWANCard"

const PWANCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
PWANCardHeader.displayName = "PWANCardHeader"

const PWANCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-pwan-navy",
      className
    )}
    {...props}
  />
))
PWANCardTitle.displayName = "PWANCardTitle"

const PWANCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
PWANCardDescription.displayName = "PWANCardDescription"

const PWANCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
PWANCardContent.displayName = "PWANCardContent"

const PWANCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
PWANCardFooter.displayName = "PWANCardFooter"

export { PWANCard, PWANCardHeader, PWANCardFooter, PWANCardTitle, PWANCardDescription, PWANCardContent }