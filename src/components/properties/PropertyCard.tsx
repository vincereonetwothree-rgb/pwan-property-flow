import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Estate } from "@/types/estate";
import { PWANCard, PWANCardContent } from "@/components/ui/pwan-card";
import { PWANBadge } from "@/components/ui/pwan-badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  estate: Estate;
  isAdmin?: boolean;
  onFlyerReplace?: (estateId: string, newFlyerUrl: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  estate, 
  isAdmin = false, 
  onFlyerReplace 
}) => {
  const [flyerUrl, setFlyerUrl] = useState(estate.flyerUrl);
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleFlyerReplace = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newUrl = e.target?.result as string;
          setFlyerUrl(newUrl);
          onFlyerReplace?.(estate.id, newUrl);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const getBadgeIntent = (status: Estate['documentationStatus']) => {
    return status === "Verified" ? "verified" : "progress";
  };

  const handleOrderNow = () => {
    navigate(`/order?property=${encodeURIComponent(estate.name)}`);
  };

  return (
    <PWANCard className="group overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={flyerUrl}
          alt={`${estate.name} flyer`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Admin Controls */}
        {isAdmin && (
          <div className="absolute top-2 right-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={handleFlyerReplace}
              className="text-xs bg-white/90 hover:bg-white shadow-sm"
            >
              Replace Flyer
            </Button>
          </div>
        )}

        {/* Documentation Badge */}
        <div className="absolute top-2 left-2">
          <PWANBadge intent={getBadgeIntent(estate.documentationStatus)}>
            {estate.documentationStatus}
          </PWANBadge>
        </div>
      </div>

      <PWANCardContent className="p-6">
        {/* Estate Info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-pwan-navy mb-2 line-clamp-1">
              {estate.name}
            </h3>
            
            <div className="flex items-center text-neutral-600 mb-2">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="text-sm line-clamp-1">{estate.location}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">{estate.estateType}</span>
              <span className="font-semibold text-pwan-navy">
                {formatPrice(estate.pricePerPlot)}/plot
              </span>
            </div>
          </div>

          {/* Order Now Button */}
          <Button 
            variant="primary" 
            onClick={handleOrderNow}
            className="w-full font-medium focus:outline-none focus:ring-4 focus:ring-pwan-red/20 focus:ring-offset-2 transition-all duration-200"
          >
            Order Now
          </Button>
        </div>
      </PWANCardContent>
    </PWANCard>
  );
};

export default PropertyCard;