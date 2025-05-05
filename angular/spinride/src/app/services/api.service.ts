import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {URLS} from '../config';
import {DishesResponse} from '../models/dish.model';
import {OrdersResponse} from '../models/order.model';
import {ProductModel} from '../models/product.model';
import {ReviewsResponse} from '../models/review.model';
import {CategoriesResponse} from '../models/menu.model';
import {CarouselResponse} from '../models/carousel.model';
import {PromocodesResponse} from '../models/promocode.model';
import {OnboardingResponse} from '../models/onboarding.model';
import {NotificationsResponse} from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLS = URLS;

  constructor(private http: HttpClient) {}

  getMenu(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(this.URLS.GET_CATEGORIES);
  }

  getDishes(): Observable<DishesResponse> {
    return this.http.get<DishesResponse>(this.URLS.GET_DISHES);
  }

  getPromocodes(): Observable<PromocodesResponse> {
    return this.http.get<PromocodesResponse>(this.URLS.GET_PROMOCODES);
  }

  getReviews(): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(this.URLS.GET_REVIEWS);
  }

  getOrders(): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(this.URLS.GET_ORDERS);
  }

  getOnboarding(): Observable<OnboardingResponse> {
    return this.http.get<OnboardingResponse>(this.URLS.GET_ONBOARDING);
  }

  getNotifications(): Observable<NotificationsResponse> {
    return this.http.get<NotificationsResponse>(this.URLS.GET_NOTIFICATIONS);
  }

  getCarousel(): Observable<CarouselResponse> {
    return this.http.get<CarouselResponse>(this.URLS.GET_CAROUSEL);
  }

  fetchProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.URLS.FETCH_PRODUCTS);
  }
}
