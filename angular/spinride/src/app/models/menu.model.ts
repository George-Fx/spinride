export interface MenuModel {
  id: number;
  name: string;
  image: string;
  audience: string[];
}

export interface CategoriesResponse {
  menu: MenuModel[];
}
