import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';
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

  @Input() bicycles: BicycleModel[] = [];

  wishlist: BicycleModel[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.setWishlist();
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bicycles => {
      this.wishlist = bicycles;
    });
  }

  addToWishlist(bicycle: BicycleModel): void {
    this.wishlistService.addToWishlist(bicycle);
  }

  addToCart(bicycle: BicycleModel): void {
    this.cartService.addToCart(bicycle);
  }

  removeFromWishlist(bicycle: BicycleModel): void {
    this.wishlistService.removeFromWishlist(bicycle);
  }

  ifInWishlist(bicycle: BicycleModel): boolean {
    return this.wishlist.some(item => item.id === bicycle.id);
  }
}
