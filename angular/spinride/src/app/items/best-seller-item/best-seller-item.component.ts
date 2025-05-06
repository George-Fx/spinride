import {Component, Input, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';
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
  wishlist: BicycleModel[] = [];

  @Input() bicycle!: BicycleModel;
  @Input() routerLink: string | undefined;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {}

  ifInWishlist(bicycles: BicycleModel): boolean {
    return this.wishlist.some(item => item.id === bicycles.id);
  }

  addToWishlist(bicycles: BicycleModel, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.addToWishlist(bicycles);
  }

  addToCart(bicycles: BicycleModel, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(bicycles);
  }

  ngOnInit(): void {
    this.wishlistService.wishlistState$.subscribe(bicycles => {
      this.wishlist = bicycles;
    });
  }
}
