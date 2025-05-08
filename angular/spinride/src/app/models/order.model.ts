import {BikeModel} from '../models/bike.model';

export interface OrderModel {
  id: number;
  date: string;
  status: string;
  total: number;
  discount: number;
  bikes: BikeModel[];
  time: string;
  products: BikeModel[];
  delivery: number;
}

export interface OrdersResponse {
  orders: OrderModel[];
}
