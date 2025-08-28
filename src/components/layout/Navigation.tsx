import React from "react"
import { Button } from "@/components/ui/button"
import { PWANContainer } from "@/components/ui/pwan-container"

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <PWANContainer>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-pwan-navy">
              PWAN Homes
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#properties" 
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium"
            >
              Properties
            </a>
            <a 
              href="#about" 
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Browse Estates
            </Button>
            <Button variant="primary" size="sm">
              Order Now
            </Button>
          </div>
        </div>
      </PWANContainer>
    </nav>
  )
}

export default Navigation