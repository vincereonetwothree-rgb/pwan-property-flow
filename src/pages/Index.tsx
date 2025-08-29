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
      <PWANSection id="about" className="bg-white">
        <PWANContainer>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-pwan-navy">
                About Us
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-pwan-red"></span>
              </h2>
              
              <p className="text-neutral-700 mb-8 leading-relaxed text-lg">
                PWAN Homes is a trusted name in real estate, committed to helping individuals and families 
                achieve land ownership with ease. As part of the PWAN Group, we provide affordable, secure, 
                and well-documented estates across Nigeria, focusing on transparency and customer satisfaction.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-pwan-navy">Meet Your Agent</h3>
              <p className="text-neutral-700 leading-relaxed text-lg">
                <span className="font-medium text-pwan-navy">Ezenwukwe Okwunna Evidence</span> is your dedicated PWAN Homes representative. 
                With a law degree and over three years of hands-on real estate experience, he brings professionalism and clarity 
                to every transaction—ensuring your journey to land ownership is simple and stress-free.
              </p>
            </div>
            
            {/* Portrait Placeholder */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="w-64 h-64 rounded-full bg-neutral-200 flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-neutral-500 font-medium">Agent Portrait</span>
              </div>
            </div>
            
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
