export type BikeType = {
  id: number;
  name: string;
  colors: Color[];
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
  price: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  oldPrice: number | null;
  color?: string;
};

export interface Color {
  id: number;
  code: string;
  name: string;
}
