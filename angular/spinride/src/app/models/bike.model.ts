export interface BikeModel {
  id: number;
  name: string;
  colors: {id: number; name: string; code: string}[];
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
  color?: string;
  ratingCount: number;
  price: string;
  isFeatured: boolean;
  isBestSeller: boolean;
  oldPrice: string;
  randomRating?: number;
}

export interface BikesResponse {
  bikes: BikeModel[];
}
