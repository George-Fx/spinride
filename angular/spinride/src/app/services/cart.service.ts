import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BicycleModel} from '../models/bicycles.model';

export interface CartState {
  total: number;
  delivery: number;
  discount: number;
  subtotal: number;
  promoCode: string;
  list: BicycleModel[];
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

  addToCart(bicycle: BicycleModel): void {
    const currentState = this.cartState.value;
    const existingBicycle = currentState.list.find(
      item => item.id === bicycle.id,
    );

    if (existingBicycle) {
      existingBicycle.quantity = (existingBicycle.quantity || 0) + 1;
    } else {
      currentState.list.push({...bicycle, quantity: 1});
    }

    currentState.subtotal += Number(bicycle.price);
    currentState.total =
      currentState.subtotal * (1 - currentState.discount / 100);
    currentState.discountAmount = currentState.subtotal - currentState.total;

    this.cartState.next({...currentState});
  }

  removeFromCart(bicycle: BicycleModel): void {
    const currentState = this.cartState.value;
    const existingBicycle = currentState.list.find(
      item => item.id === bicycle.id,
    );

    if (existingBicycle) {
      if (existingBicycle.quantity && existingBicycle.quantity > 1) {
        existingBicycle.quantity -= 1;
      } else {
        currentState.list = currentState.list.filter(
          item => item.id !== bicycle.id,
        );
      }

      currentState.subtotal -= Number(bicycle.price);
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

  getCartList(): BicycleModel[] {
    return this.cartState.value.list;
  }
}
