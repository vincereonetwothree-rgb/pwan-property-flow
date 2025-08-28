import React from "react"
import { PWANContainer } from "@/components/ui/pwan-container"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <PWANContainer>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img 
                src="/lovable-uploads/64f49d66-d8b4-4642-a622-1bdfe320833f.png" 
                alt="PWAN Homes"
                className="h-8 mb-4"
              />
              <p className="text-neutral-600 max-w-md leading-relaxed">
                Your trusted partner in premium real estate. Discover exceptional properties 
                and experience seamless property transactions with our professional team.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-pwan-navy mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#properties" className="text-neutral-600 hover:text-pwan-red transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-600 hover:text-pwan-red transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-600 hover:text-pwan-red transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-pwan-navy mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-neutral-600">
                  Email: info@pwanhomes.com
                </li>
                <li className="text-neutral-600">
                  Phone: +234 (0) 800 PWAN
                </li>
                <li className="text-neutral-600">
                  Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © 2024 PWAN Homes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-neutral-500 hover:text-pwan-red text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-neutral-500 hover:text-pwan-red text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </PWANContainer>
    </footer>
  )
}

export default Footer