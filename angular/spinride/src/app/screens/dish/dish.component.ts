import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {ApiService} from '../../services/api.service';
import {CartState} from '../../services/cart.service';
import {CartService} from '../../services/cart.service';
import {MetaService} from '../../services/meta.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-dish',
  standalone: false,
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss',
})
export class DishComponent implements OnInit {
  svg = svg;
  cart: DishModel[] = [];
  wishlist: DishModel[] = [];
  dish: DishModel | null = null;

  qty: number = 0;

  loading = true;
  error = '';

  cartState$: Observable<CartState>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    private metaService: MetaService,
    private wishlistService: WishlistService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  ngOnInit(): void {
    this.setWishlist();
    this.initializeCart();
    this.initializeDishes();
    this.initializeMetaTags();
  }

  private initializeMetaTags(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }

  private initializeDishes(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.getDishes().subscribe({
      next: data => {
        this.dish = data.dishes.find(dish => String(dish.id) === id) || null;
      },
      error: err => {
        this.error = err;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  private initializeCart(): void {
    this.cartState$.subscribe(state => {
      this.cart = state.list;
      this.qty =
        this.cart.find(item => item.id === this.dish?.id)?.quantity || 0;
    });
  }

  ifInWishlist(id: number): boolean {
    return this.wishlist.some(item => item.id === id);
  }

  addToCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(dish);
  }

  removeFromCart(dish: DishModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.removeFromCart(dish);
  }

  addToWishlist(dish: DishModel, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.addToWishlist(dish);
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
    });
  }
}
