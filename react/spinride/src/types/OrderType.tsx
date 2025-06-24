export type OrderProductType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type OrderType = {
  id: number;
  date: string;
  time: string;
  status: string;
  total: number;
  products: OrderProductType[];
};
