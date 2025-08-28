export type DocumentationStatus = "Verified" | "In Progress";

export interface Estate {
  id: string;
  name: string;
  location: string;
  estateType: "Land" | "Residential" | "Commercial" | "Mixed-Use";
  pricePerPlot: number; // in NGN
  documentationStatus: DocumentationStatus;
  flyerUrl: string;     // placeholder image initially
  images?: string[];
  description?: string;
}