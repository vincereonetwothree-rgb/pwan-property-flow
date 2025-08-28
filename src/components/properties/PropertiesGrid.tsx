import React, { useState } from "react";
import { Estate } from "@/types/estate";
import PropertyCard from "./PropertyCard";

interface PropertiesGridProps {
  estates: Estate[];
  isAdmin?: boolean;
}

const PropertiesGrid: React.FC<PropertiesGridProps> = ({ estates, isAdmin = false }) => {
  const [localEstates, setLocalEstates] = useState(estates);

  const handleFlyerReplace = (estateId: string, newFlyerUrl: string) => {
    setLocalEstates(prev => 
      prev.map(estate => 
        estate.id === estateId 
          ? { ...estate, flyerUrl: newFlyerUrl }
          : estate
      )
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {localEstates.map((estate) => (
        <PropertyCard
          key={estate.id}
          estate={estate}
          isAdmin={isAdmin}
          onFlyerReplace={handleFlyerReplace}
        />
      ))}
    </div>
  );
};

export default PropertiesGrid;