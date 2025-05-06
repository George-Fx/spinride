import {Component, Input} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  standalone: false,
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.scss',
})
export class WishlistItemComponent {
  @Input() bicycle!: BicycleModel;

  svg = svg;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  addToCart(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(bicycle);
  }

  removeFromWishlist(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.removeFromWishlist(bicycle);
  }
}
