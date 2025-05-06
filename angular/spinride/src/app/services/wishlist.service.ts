import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {BicycleModel} from '../models/bicycles.model';

export interface WishlistState {
  list: BicycleModel[];
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private initialState: BicycleModel[] = [];

  private wishlistState = new BehaviorSubject<BicycleModel[]>(
    this.initialState,
  );
  wishlistState$ = this.wishlistState.asObservable();

  addToWishlist(bicycle: BicycleModel): void {
    const currentState = this.wishlistState.value;
    const inWishlist = currentState.find(item => item.id === bicycle.id);

    if (!inWishlist) {
      this.wishlistState.next([...currentState, bicycle]);
    }
  }

  removeFromWishlist(bicycle: BicycleModel): void {
    const currentState = this.wishlistState.value;
    const updatedState = currentState.filter(item => item.id !== bicycle.id);
    this.wishlistState.next(updatedState);
  }

  getWishlist(): BicycleModel[] {
    return this.wishlistState.value;
  }
}
