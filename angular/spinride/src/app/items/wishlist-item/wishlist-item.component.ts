import {Component, Input} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  standalone: false,
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.scss',
})
export class WishlistItemComponent {
  @Input() dish!: DishModel;

  svg = svg;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  addToCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(dish);
  }

  removeFromWishlist(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.removeFromWishlist(dish);
  }
}
