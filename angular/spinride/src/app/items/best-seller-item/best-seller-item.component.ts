import {Component, Input, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-best-seller-item',
  templateUrl: './best-seller-item.component.html',
  styleUrl: './best-seller-item.component.scss',
  standalone: false,
})
export class BestSellerItemComponent implements OnInit {
  svg = svg;
  wishlist: DishModel[] = [];

  @Input() dish!: DishModel;
  @Input() routerLink: string | undefined;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  ifInWishlist(dishes: DishModel): boolean {
    return this.wishlist.some(item => item.id === dishes.id);
  }

  addToWishlist(dishes: DishModel, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.addToWishlist(dishes);
  }

  addToCart(dishes: DishModel, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(dishes);
  }

  ngOnInit(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }
}
