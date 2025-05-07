export interface Promocode {
  id: number;
  code: string;
  name: string;
  image: string;
  discount: number;
  expires_at: string;
}

export interface PromocodesResponse {
  promocodes: Promocode[];
}
