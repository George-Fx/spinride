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

  randomNumber!: number;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  wishlist: BikeModel[] = [];

  ngOnInit(): void {
    this.getWishlist();
    this.randomNumber = this.getRandomNumber();
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
}
