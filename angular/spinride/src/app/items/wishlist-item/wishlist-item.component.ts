import {Component, Input} from '@angular/core';

import {svg} from '@svg/index';
import {BikeModel} from '../../models/bike.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  standalone: false,
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.scss',
})
export class WishlistItemComponent {
  @Input() bike!: BikeModel;

  svg = svg;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  addToCart(bike: BikeModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(bike);
  }

  removeFromWishlist(bike: BikeModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.removeFromWishlist(bike);
  }
}
