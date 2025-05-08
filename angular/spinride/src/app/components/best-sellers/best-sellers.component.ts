import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Subscription} from 'rxjs';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {CartService} from '../../services/cart.service';
import {BikeModel} from '../../models/bike.model';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-best-sellers',
  imports: [CommonModule, RouterModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BestSellersComponent {
  svg = svg;
  @Input() bicycles: BikeModel[] = [];

  cart: BikeModel[] = [];
  wishlist: BikeModel[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.setCart();
    this.setWishlist();
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bicycles => {
      this.wishlist = bicycles;
    });
  }

  setCart(): void {
    this.cartService.cartState$.subscribe(bikes => {
      this.cart = bikes.list;
    });
  }

  addToWishlist(bicycle: BikeModel): void {
    this.wishlistService.addToWishlist(bicycle);
  }

  addToCart(bicycle: BikeModel): void {
    this.cartService.addToCart(bicycle);
  }

  removeFromWishlist(bicycle: BikeModel): void {
    this.wishlistService.removeFromWishlist(bicycle);
  }

  ifInWishlist(bicycle: BikeModel): boolean {
    return this.wishlist.some(item => item.id === bicycle.id);
  }

  ifInCart(bicycle: BikeModel): boolean {
    return this.cart.some(item => item.id === bicycle.id);
  }
}
