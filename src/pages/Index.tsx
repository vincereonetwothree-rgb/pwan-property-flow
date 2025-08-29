import React from "react"
import { Button } from "@/components/ui/button"
import { PWANSection } from "@/components/ui/pwan-section"
import { PWANContainer } from "@/components/ui/pwan-container"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import PropertiesGrid from "@/components/properties/PropertiesGrid"
import { estates } from "@/data/estates"

const Index = () => {
  // Admin mode - hardcoded to false as specified
  const isAdmin = false;

  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PWANSection id="home" spacing="large" className="bg-gradient-to-b from-white via-neutral-50/30 to-white">
        <PWANContainer>
          <div className="text-center max-w-4xl mx-auto py-20 md:py-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-pwan-navy mb-8 leading-tight tracking-tight">
              Building Dreams,
              <br />
              <span className="font-medium text-pwan-red">One Plot at a Time.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Discover exceptional properties and turn your vision into reality with Nigeria's most trusted real estate partner.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="xl"
                onClick={scrollToProperties}
                className="text-lg px-12 py-4 h-auto font-medium focus:outline-none focus:ring-4 focus:ring-pwan-red/20 focus:ring-offset-2 transition-all duration-200 hover:scale-105"
              >
                Explore Properties
              </Button>
            </div>
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Properties Section Placeholder */}
      <PWANSection id="properties" className="bg-neutral-50">
        <PWANContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              Our Properties
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Discover premium estates across Lagos, Abuja, South-East, and Delta regions.
            </p>
          </div>
          
          {/* Properties Grid */}
          <PropertiesGrid estates={estates} isAdmin={isAdmin} />
        </PWANContainer>
      </PWANSection>

      {/* About Us Section Placeholder */}
      <PWANSection id="about">
        <PWANContainer>
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              About PWAN Homes
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Coming soon - Learn about our mission and values.
            </p>
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Contact Section Placeholder */}
      <PWANSection id="contact" className="bg-neutral-50">
        <PWANContainer>
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Coming soon - Get in touch with our team.
            </p>
          </div>
        </PWANContainer>
      </PWANSection>

      <Footer />
    </div>
  )
}

export default Index;
