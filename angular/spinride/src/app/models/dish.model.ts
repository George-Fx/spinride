export interface DishModel {
  id: number;
  name: string;
  price: number;
  weight: number;
  kcal: number;
  image: string;
  images: string[];
  description: string;
  dietaryPreferences: string[];
  rating: string;
  isRecommended: boolean;
  isNew: boolean;
  isHot: boolean;
  menu: string[];
  quantity: number;
}

export interface DishesResponse {
  dishes: DishModel[];
}
