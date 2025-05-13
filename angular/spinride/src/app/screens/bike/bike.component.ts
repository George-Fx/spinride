import {Observable} from 'rxjs';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, signal} from '@angular/core';

import {svg} from '@svg/index';
import {ReviewModel} from '@models/review.model';
import {ApiService} from '@services/api.service';
import {MetaService} from '@services/meta.service';
import {BikeModel} from '../../models/bike.model';
import {CartState} from '../../services/cart.service';
import {CartService} from '../../services/cart.service';
import {WishlistService} from '@services/wishlist.service';

@Component({
  selector: 'app-bike',
  standalone: false,
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.scss',
})
export class BikeComponent {
  public svg = svg;

  cartState$: Observable<CartState>;

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  bike: BikeModel | null = null;
  cart: BikeModel[] = [];

  wishlist: BikeModel[] = [];

  activeSlide = 0;

  reviews: ReviewModel[] = [];

  bikes: BikeModel[] = [];
  isLoading = true;
  // selectedColor: string = '';
  selectedColor = signal<string | null>(null);

  selectColor(color: string): void {
    this.selectedColor.set(color);
  }

  qty: number = 0;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  ifInWishlist(bike: BikeModel): boolean {
    return this.wishlist.some(item => item.id === bike.id);
  }

  addToWishlist(bike: BikeModel): void {
    if (this.ifInWishlist(bike)) {
      this.wishlistService.removeFromWishlist(bike);
    } else {
      this.wishlistService.addToWishlist(bike);
    }
  }

  onSlideChange(e: any): void {
    const activeIndex = e?.startPosition;
    if (activeIndex !== undefined && activeIndex !== null) {
      this.activeSlide = activeIndex;
    }
  }

  ngOnInit(): void {
    this.setMeta();
    this.getBikes();
    this.initializeCart();
    this.getReviews();
    this.setWishlist();
  }

  setMeta() {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bikes => {
      this.wishlist = bikes;
    });
  }

  getReviews(): void {
    this.apiService.getReviews().subscribe({
      next: data => {
        this.reviews = data.reviews;
      },
      error: error => {
        console.error('Error fetching reviews:', error);
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false),
    });
  }

  private getBikes(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.getBikes().subscribe({
      next: data => {
        this.bike = data.bikes.find(bike => String(bike.id) === id) || null;
      },
      error: error => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false),
    });
  }

  addToCart(bike: BikeModel): void {
    const bikeWithColor = {
      ...bike,
      color: this.selectedColor() ?? undefined,
    };
    this.cartService.addToCart(bikeWithColor);
  }

  removeFromCart(bike: BikeModel): void {
    this.cartService.removeFromCart(bike);
  }

  private initializeCart(): void {
    this.cartState$.subscribe(state => {
      this.cart = state.list;
      this.qty =
        this.cart.find(item => item.id === this.bike?.id)?.quantity || 0;
    });
  }
}
