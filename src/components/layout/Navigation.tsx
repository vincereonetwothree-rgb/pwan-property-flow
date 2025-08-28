import React from "react"
import { Button } from "@/components/ui/button"
import { PWANContainer } from "@/components/ui/pwan-container"

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 transition-all duration-200">
      <PWANContainer>
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/494a13fc-fc96-49f2-9b6c-7824b95c357a.png" 
              alt="PWAN Homes"
              className="h-8 md:h-10"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-pwan-red focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-pwan-red focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-pwan-red focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 hover:text-pwan-navy transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-pwan-red focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Hidden for now, can be added later */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </PWANContainer>
    </nav>
  )
}

export default Navigation