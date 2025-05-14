import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {BikeModel} from '@models/bike.model';

export interface CartState {
  total: number;
  delivery: number;
  discount: number;
  subtotal: number;
  promoCode: string;
  list: BikeModel[];
  discountAmount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private initialState: CartState = {
    total: 0,
    delivery: 0,
    discount: 0,
    subtotal: 0,
    promoCode: '',
    list: [],
    discountAmount: 0,
  };

  private cartState = new BehaviorSubject<CartState>(this.initialState);
  cartState$ = this.cartState.asObservable();

  addToCart(bike: BikeModel): void {
    const currentState = this.cartState.value;
    const existingBike = currentState.list.find(item => item.id === bike.id);

    const bikePrice = Number(bike.price);

    if (existingBike) {
      existingBike.quantity = (existingBike.quantity || 0) + 1;
    } else {
      currentState.list.push({...bike, quantity: 1});
    }

    currentState.subtotal += bikePrice;
    currentState.total =
      currentState.subtotal * (1 - currentState.discount / 100);
    currentState.discountAmount = currentState.subtotal - currentState.total;

    this.cartState.next({...currentState});
  }

  removeFromCart(bike: BikeModel): void {
    const currentState = this.cartState.value;
    const existingBike = currentState.list.find(item => item.id === bike.id);

    const bikePrice = Number(bike.price);

    if (existingBike) {
      if (existingBike.quantity && existingBike.quantity > 1) {
        existingBike.quantity -= 1;
      } else {
        currentState.list = currentState.list.filter(
          item => item.id !== bike.id,
        );
      }

      currentState.subtotal -= bikePrice;
      currentState.total =
        currentState.subtotal * (1 - currentState.discount / 100);
      currentState.discountAmount = currentState.subtotal - currentState.total;

      if (currentState.list.length === 0) {
        currentState.discount = 0;
        currentState.promoCode = '';
      }

      this.cartState.next({...currentState});
    }
  }

  setDiscount(discount: number): void {
    const currentState = this.cartState.value;
    currentState.discount = discount;
    currentState.total = currentState.subtotal * (1 - discount / 100);
    currentState.discountAmount = currentState.subtotal - currentState.total;

    this.cartState.next({...currentState});
  }

  setPromoCode(promoCode: string): void {
    const currentState = this.cartState.value;
    currentState.promoCode = promoCode;

    this.cartState.next({...currentState});
  }

  resetCart(): void {
    this.cartState.next({...this.initialState});
  }

  getCartList(): BikeModel[] {
    return this.cartState.value.list;
  }
}
