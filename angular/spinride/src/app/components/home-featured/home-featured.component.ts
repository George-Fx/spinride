import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BikeModel} from '../../models/bike.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-home-featured',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeFeaturedComponent {
  svg = svg;

  @Input() bikes: BikeModel[] = [];

  wishlist: BikeModel[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.setWishlist();
  }

  setWishlist(): void {
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

  removeFromWishlist(bike: BikeModel): void {
    this.wishlistService.removeFromWishlist(bike);
  }

  ifInWishlist(bike: BikeModel): boolean {
    return this.wishlist.some(item => item.id === bike.id);
  }
}
