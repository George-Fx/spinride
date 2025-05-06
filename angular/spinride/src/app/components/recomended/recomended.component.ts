import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';
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
  wishlist: BicycleModel[] = [];

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  svg = svg;
  @Input() bicycles: BicycleModel[] = [];

  addToCart(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(bicycle);
  }

  addToWishlist(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.addToWishlist(bicycle);
  }

  ifInWishlist(bicycle: BicycleModel): boolean {
    return this.wishlist.some(item => item.id === bicycle.id);
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bicycles => {
      this.wishlist = bicycles;
    });
  }

  ngOnInit(): void {
    this.setWishlist();
  }
}
