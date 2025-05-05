export interface BicycleModel {
  id: number;
  name: string;
  colors: string[];
  bikeType: string[];
  suspensionType: string[];
  drivetrain: string[];
  images: string[];
  image: string;
  categories: string[];
  description: string;
  rating: number;
  quantity: number | null;
  promotion: string;
  isNew: boolean;
  isTop: boolean;
  ratingCount: number;
  price: string;
  isFeatured: boolean;
  isBestSeller: boolean;
}

export interface BicyclesResponse {
  bicycles: BicycleModel[];
}
