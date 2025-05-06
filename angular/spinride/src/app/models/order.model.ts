import {BicycleModel} from '../models/bicycles.model';

export interface OrderModel {
  id: number;
  date: string;
  status: string;
  total: number;
  discount: number;
  bicycles: BicycleModel[];
  time: string;
  products: BicycleModel[];
  delivery: number;
}

export interface OrdersResponse {
  orders: OrderModel[];
}
