export interface CategoryModel {
  id: number;
  image: string;
  category: string;
}

export interface CategoriesResponse {
  categories: CategoryModel[];
}
