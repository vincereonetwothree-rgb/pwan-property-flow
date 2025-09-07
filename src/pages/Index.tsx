import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PWANSection } from "@/components/ui/pwan-section"
import { PWANContainer } from "@/components/ui/pwan-container"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import PropertiesGrid from "@/components/properties/PropertiesGrid"
import HeroBackground from "@/components/ui/hero-background"
import HeroBackgroundGradient from "@/components/ui/hero-background-gradient"
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
      <PWANSection id="home" spacing="large" className="relative bg-gradient-to-b from-white via-neutral-50/30 to-white overflow-hidden">
        <HeroBackgroundGradient />
        <PWANContainer>
          <div className="relative z-10 text-center max-w-4xl mx-auto py-20 md:py-32">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-pwan-navy mb-8 leading-tight tracking-tight"
            >
              Building Dreams,
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="font-medium text-pwan-red"
              >
                One Plot at a Time.
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              Discover exceptional properties and turn your vision into reality with Nigeria's most trusted real estate partner.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Button 
                variant="primary" 
                size="xl"
                onClick={scrollToProperties}
                className="text-lg px-12 py-4 h-auto font-medium focus:outline-none focus:ring-4 focus:ring-pwan-red/20 focus:ring-offset-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pwan-red/25"
              >
                Explore Properties
              </Button>
            </motion.div>
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Properties Section */}
      <PWANSection id="properties" className="bg-neutral-50">
        <PWANContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              Our Properties
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Discover premium estates across Lagos, Abuja, South-East, and Delta regions.
            </p>
          </motion.div>
          
          {/* Properties Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <PropertiesGrid estates={estates} isAdmin={isAdmin} />
          </motion.div>
        </PWANContainer>
      </PWANSection>

      {/* About Us Section */}
      <PWANSection id="about" className="bg-white">
        <PWANContainer>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-pwan-navy">
                About Us
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-1 left-0 h-1 bg-pwan-red"
                />
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-neutral-700 mb-8 leading-relaxed text-lg"
              >
                PWAN Homes is a trusted name in real estate, committed to helping individuals and families 
                achieve land ownership with ease. As part of the PWAN Group, we provide affordable, secure, 
                and well-documented estates across Nigeria, focusing on transparency and customer satisfaction.
              </motion.p>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-3 text-pwan-navy"
              >
                Meet Your Agent
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-neutral-700 leading-relaxed text-lg"
              >
                <span className="font-medium text-pwan-navy">Ezenwukwe Okwunna Evidence</span> is your dedicated PWAN Homes representative. 
                With a law degree and over three years of hands-on real estate experience, he brings professionalism and clarity 
                to every transaction—ensuring your journey to land ownership is simple and stress-free.
              </motion.p>
            </motion.div>
            
            {/* Agent Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end order-first md:order-last"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="/lovable-uploads/a52b9675-5a0f-428d-a598-be90cdabbbce.png" 
                  alt="Ezenwukwe Okwunna Evidence - PWAN Homes Real Estate Agent" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
          </div>
        </PWANContainer>
      </PWANSection>

      {/* Contact Section */}
      <PWANSection id="contact" className="bg-neutral-50">
        <PWANContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pwan-navy mb-6">
              Reach Out
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Get in touch with our team for all your real estate needs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          >
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
                <a href="tel:2349026429948" className="hover:text-pwan-red transition-colors">
                  234 9026429948
                </a>
              </p>
            </div>
            
            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pwan-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pwan-navy mb-2">WhatsApp</h3>
              <p className="text-neutral-600">
                <a href="https://wa.link/wfos1z" target="_blank" rel="noopener noreferrer" className="hover:text-pwan-red transition-colors">
                  Chat with us
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
          </motion.div>
        </PWANContainer>
      </PWANSection>

      <Footer />
    </div>
  )
}
export default Index;
