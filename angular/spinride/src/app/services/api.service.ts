import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {URLS} from '../config';
import {OrdersResponse} from '../models/order.model';
import {ProductModel} from '../models/product.model';
import {ReviewsResponse} from '../models/review.model';
import {BicyclesResponse} from '../models/bicycles.model';
import {CarouselResponse} from '../models/carousel.model';
import {CategoriesResponse} from '../models/category.model';
import {PromocodesResponse} from '../models/promocode.model';
import {OnboardingResponse} from '../models/onboarding.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLS = URLS;

  constructor(private http: HttpClient) {}

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

  getCarousel(): Observable<CarouselResponse> {
    return this.http.get<CarouselResponse>(this.URLS.GET_CAROUSEL);
  }

  fetchBicycles(): Observable<BicyclesResponse> {
    return this.http.get<BicyclesResponse>(this.URLS.FETCH_BICYCLES);
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(this.URLS.GET_CATEGORIES);
  }
}
