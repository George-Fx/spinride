import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-recomended',
  imports: [CommonModule, RouterModule],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecomendedComponent implements OnInit {
  wishlist: DishModel[] = [];

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  svg = svg;
  @Input() dishes: DishModel[] = [];

  addToCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(dish);
  }

  addToWishlist(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.addToWishlist(dish);
  }

  ifInWishlist(dish: DishModel): boolean {
    return this.wishlist.some(item => item.id === dish.id);
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }

  ngOnInit(): void {
    this.setWishlist();
  }
}
