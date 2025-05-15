import {Component, Input, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {BikeModel} from '@models/bike.model';
import {CartService} from '@services/cart.service';
import {WishlistService} from '@services/wishlist.service';

@Component({
  selector: 'app-shop-item',
  standalone: false,
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss',
})
export class ShopItemComponent implements OnInit {
  @Input() bike!: BikeModel;
  svg = svg;

  cart: BikeModel[] = [];

  randomNumber!: number;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  wishlist: BikeModel[] = [];

  ngOnInit(): void {
    this.setCart();
    this.getWishlist();
    this.randomNumber = this.getRandomNumber();
  }

  setCart(): void {
    this.cartService.cartState$.subscribe(bikes => {
      this.cart = bikes.list;
    });
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 11);
  }

  getWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bikes => {
      this.wishlist = bikes;
    });
  }

  addToWishlist(bike: BikeModel): void {
    this.wishlistService.addToWishlist(bike);
  }

  addToCart(bike: BikeModel): void {
    this.cartService.addToCart(bike);
  }

  ifInWishlist(bike: BikeModel): boolean {
    return this.wishlist.some(item => item.id === bike.id);
  }

  ifInCart(bike: BikeModel): boolean {
    return this.cart.some(item => item.id === bike.id);
  }
}
