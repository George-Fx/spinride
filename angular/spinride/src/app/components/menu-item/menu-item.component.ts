import {Component, Input, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-menu-item',
  standalone: false,
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnInit {
  svg = svg;
  wishlist: DishModel[] = [];
  @Input() dish: DishModel | null = null;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  addToCart(dish: DishModel, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(dish);
  }

  addToWishlist(dish: DishModel, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.addToWishlist(dish);
  }

  ifInWishlist(dish: DishModel): boolean {
    return this.wishlist.some(item => item.id === dish.id);
  }

  ngOnInit(): void {
    this.setWishlist();
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }
}
