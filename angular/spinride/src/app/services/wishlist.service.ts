import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {BikeModel} from '../models/bike.model';

export interface WishlistState {
  list: BikeModel[];
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private initialState: BikeModel[] = [];

  private wishlistState = new BehaviorSubject<BikeModel[]>(this.initialState);
  wishlistState$ = this.wishlistState.asObservable();

  addToWishlist(bike: BikeModel): void {
    const currentState = this.wishlistState.value;
    const inWishlist = currentState.find(item => item.id === bike.id);

    if (!inWishlist) {
      this.wishlistState.next([...currentState, bike]);
    }
  }

  removeFromWishlist(bike: BikeModel): void {
    const currentState = this.wishlistState.value;
    const updatedState = currentState.filter(item => item.id !== bike.id);
    this.wishlistState.next(updatedState);
  }

  getWishlist(): BikeModel[] {
    return this.wishlistState.value;
  }
}
