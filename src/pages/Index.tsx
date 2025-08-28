import React from "react"
import { Button } from "@/components/ui/button"
import { PWANBadge } from "@/components/ui/pwan-badge"
import { PWANCard, PWANCardContent, PWANCardDescription, PWANCardHeader, PWANCardTitle } from "@/components/ui/pwan-card"
import { PWANSection } from "@/components/ui/pwan-section"
import { PWANContainer } from "@/components/ui/pwan-container"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PWANSection spacing="large" className="bg-gradient-to-b from-neutral-50 to-white">
        <PWANContainer>
          <div className="text-center content-spacing">
            <PWANBadge intent="verified" className="mb-6">
              Trusted Real Estate Partner
            </PWANBadge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pwan-navy mb-6 leading-tight">
              Premium Real Estate
              <br />
              <span className="text-pwan-red">Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover exceptional properties with PWAN Homes. Browse our curated collection 
              of premium estates and experience seamless property transactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="xl">
                Browse Properties
              </Button>
              <Button variant="ghost" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Features Preview */}
      <PWANSection>
        <PWANContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pwan-navy mb-4">
              Why Choose PWAN Homes?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We provide exceptional service and expertise to make your property journey seamless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PWANCard className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <PWANCardHeader>
                <div className="w-12 h-12 bg-pwan-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-pwan-red rounded"></div>
                </div>
                <PWANCardTitle className="text-xl">Premium Properties</PWANCardTitle>
              </PWANCardHeader>
              <PWANCardContent>
                <PWANCardDescription>
                  Carefully curated selection of high-quality properties in prime locations.
                </PWANCardDescription>
              </PWANCardContent>
            </PWANCard>

            <PWANCard className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <PWANCardHeader>
                <div className="w-12 h-12 bg-pwan-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-pwan-red rounded"></div>
                </div>
                <PWANCardTitle className="text-xl">Expert Guidance</PWANCardTitle>
              </PWANCardHeader>
              <PWANCardContent>
                <PWANCardDescription>
                  Professional advice and support throughout your property journey.
                </PWANCardDescription>
              </PWANCardContent>
            </PWANCard>

            <PWANCard className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <PWANCardHeader>
                <div className="w-12 h-12 bg-pwan-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-pwan-red rounded"></div>
                </div>
                <PWANCardTitle className="text-xl">Seamless Process</PWANCardTitle>
              </PWANCardHeader>
              <PWANCardContent>
                <PWANCardDescription>
                  Streamlined transactions with transparent processes and quick turnaround.
                </PWANCardDescription>
              </PWANCardContent>
            </PWANCard>
          </div>
        </PWANContainer>
      </PWANSection>

      {/* CTA Section */}
      <PWANSection className="bg-pwan-navy">
        <PWANContainer>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start browsing our exclusive collection of premium properties today.
            </p>
            <Button 
              variant="primary" 
              size="xl"
              className="bg-pwan-red hover:bg-pwan-red/90"
            >
              Get Started Now
            </Button>
          </div>
        </PWANContainer>
      </PWANSection>

      <Footer />
    </div>
  )
}

export default Index;
