export interface Promocode {
  id: number;
  code: string;
  name: string;
  image: string;
  discount: number;
  expiry: string;
}

export interface PromocodesResponse {
  promocodes: Promocode[];
}
