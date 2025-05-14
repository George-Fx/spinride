import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {isMobile} from 'react-device-detect';
import {ActivatedRoute} from '@angular/router';

import {Component, OnInit, OnDestroy, Input} from '@angular/core';

import {BikeModel} from '@models/bike.model';
import {CartState} from '@services/cart.service';
import {CartService} from '@services/cart.service';
import {WishlistState} from '@services/wishlist.service';
import {WishlistService} from '@services/wishlist.service';

@Component({
  selector: 'app-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.component.html',
  styleUrl: './bottom-tab-bar.component.scss',
  standalone: false,
})
export class BottomTabBarComponent implements OnInit, OnDestroy {
  isMobile = isMobile;

  @Input() style: {[key: string]: string} = {};
  @Input() footerStyle: {[key: string]: string} = {};

  get containerStyle() {
    return {
      padding: '20px',
      backgroundColor: '#F3F3F3',
      display: 'flex',
      flexDirection: 'column',
      ...this.style,
    };
  }

  list: BikeModel[] = [];
  wishlist: BikeModel[] = [];
  activeRoute: string = '';
  private destroy$ = new Subject<void>();

  cartState$: Observable<CartState>;
  wishlistState$!: Observable<WishlistState>;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  ngOnInit(): void {
    this.initializeActiveRoute();
    this.initializeCart();

    this.wishlistState$ = this.wishlistService.wishlistState$.pipe(
      map((bikes: BikeModel[]) => ({
        list: bikes,
      })),
    );
    this.wishlistState$.subscribe(state => {
      this.wishlist = state.list;
    });
  }

  private initializeCart(): void {
    this.cartState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.list = state?.list || [];
    });
  }

  private initializeActiveRoute(): void {
    this.route.url.pipe(takeUntil(this.destroy$)).subscribe(segments => {
      if (segments.length > 0) {
        this.activeRoute = segments[0].path;
      } else {
        console.warn('No route segments found');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
