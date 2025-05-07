import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Subscription} from 'rxjs';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {CartService} from '../../services/cart.service';
import {BicycleModel} from '../../models/bicycles.model';
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
  @Input() bicycles: BicycleModel[] = [];

  wishlist: BicycleModel[] = [];

  constructor(private wishlistService: WishlistService) {}

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
    // this.wishlistService.addToCart(bicycle);
  }

  removeFromWishlist(bicycle: BicycleModel): void {
    this.wishlistService.removeFromWishlist(bicycle);
  }

  ifInWishlist(bicycle: BicycleModel): boolean {
    return this.wishlist.some(item => item.id === bicycle.id);
  }
}
