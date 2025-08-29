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
            
            {/* Agent Portrait */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="/lovable-uploads/a52b9675-5a0f-428d-a598-be90cdabbbce.png" 
                  alt="Ezenwukwe Okwunna Evidence - PWAN Homes Real Estate Agent" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Contact Section */}
      <PWANSection id="contact" className="bg-neutral-50">
        <PWANContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              Reach Out
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Get in touch with our team for all your real estate needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Office Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pwan-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pwan-navy mb-2">Office Address</h3>
              <p className="text-neutral-600">
                Opposite Lady Maureen Hotel,<br />
                Along Isu Mgbakwu Road
              </p>
            </div>
            
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pwan-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pwan-navy mb-2">Phone</h3>
              <p className="text-neutral-600">
                <a href="tel:+2349026429948" className="hover:text-pwan-red transition-colors">
                  +234 902 642 9948
                </a>
              </p>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pwan-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pwan-navy mb-2">Email</h3>
              <p className="text-neutral-600">
                <a href="mailto:info@pwanhomes.com" className="hover:text-pwan-red transition-colors">
                  info@pwanhomes.com
                </a>
              </p>
            </div>
            
            {/* Working Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pwan-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pwan-navy mb-2">Working Hours</h3>
              <p className="text-neutral-600">
                Mon – Sat<br />
                9am – 6pm
              </p>
            </div>
          </div>
        </PWANContainer>
      </PWANSection>

      <Footer />
    </div>
  )
}

export default Index;
