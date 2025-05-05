import {DishModel} from './dish.model';

export interface OrderModel {
  id: number;
  date: string;
  status: string;
  total: number;
  discount: number;
  dishes: DishModel[];
  time: string;
  products: DishModel[];
  delivery: number;
}

export interface OrdersResponse {
  orders: OrderModel[];
}
