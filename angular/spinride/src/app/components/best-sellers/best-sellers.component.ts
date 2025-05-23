import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '@svg/index';
import {CartService} from '@services/cart.service';
import {BikeModel} from '@models/bike.model';
import {WishlistService} from '@services/wishlist.service';

@Component({
  selector: 'app-best-sellers',
  imports: [CommonModule, RouterModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BestSellersComponent {
  svg = svg;
  @Input() bikes: BikeModel[] = [];

  cart: BikeModel[] = [];
  wishlist: BikeModel[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.setCart();
    this.setWishlist();
    this.bikes = this.bikes.map(bike => ({
      ...bike,
      randomRating: this.getRandomRating(),
    }));
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bikes => {
      this.wishlist = bikes;
    });
  }

  setCart(): void {
    this.cartService.cartState$.subscribe(bikes => {
      this.cart = bikes.list;
    });
  }

  addToWishlist(bike: BikeModel): void {
    this.wishlistService.addToWishlist(bike);
  }

  addToCart(bike: BikeModel): void {
    this.cartService.addToCart(bike);
  }

  removeFromWishlist(bike: BikeModel): void {
    this.wishlistService.removeFromWishlist(bike);
  }

  ifInWishlist(bike: BikeModel): boolean {
    return this.wishlist.some(item => item.id === bike.id);
  }

  ifInCart(bike: BikeModel): boolean {
    return this.cart.some(item => item.id === bike.id);
  }

  getRandomRating(): number {
    return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  }
}
