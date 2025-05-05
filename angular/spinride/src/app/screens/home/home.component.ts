import {Subject} from 'rxjs';
import {Component} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

import {Banner} from '../../models/banner.model';
import {DishModel} from '../../models/dish.model';
import {MenuModel} from '../../models/menu.model';
import {ApiService} from '../../services/api.service';
import {ReviewModel} from '../../models/review.model';
import {MetaService} from '../../services/meta.service';
import {ModalService} from '../../services/modal.service';
import {CarouselModel} from '../../models/carousel.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  banners: Banner[] = [];
  dishes: DishModel[] = [];
  reviews: ReviewModel[] = [];
  carousel: CarouselModel[] = [];
  categories: MenuModel[] = [];

  dishesIsLoading = true;
  dishesError = '';

  carouselIsLoading = true;
  carouselError = '';

  categoriesIsLoading = true;
  categoriesError = '';

  reviewsIsLoading = true;
  reviewsError = '';

  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.initializeMeta();
    this.modalSubscribe();
    this.initializeDishes();
    this.initializeReviews();
    this.initializeCarousel();
    this.initializeCategories();
  }

  private modalSubscribe(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;
        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#fff');
          this.metaService.setBackgroundColor('#F5FAFB');
        } else {
          this.metaService.setThemeColor('#F5FAFB');
          this.metaService.setBackgroundColor('#F5FAFB');
        }
      });
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  private initializeDishes(): void {
    this.apiService.getDishes().subscribe({
      next: data => (this.dishes = data.dishes),
      error: err => (this.dishesError = err),
      complete: () => (this.dishesIsLoading = false),
    });
  }

  private initializeCarousel(): void {
    this.apiService.getCarousel().subscribe({
      next: data => (this.carousel = data.carousel),
      error: err => (this.carouselError = err),
      complete: () => (this.carouselIsLoading = false),
    });
  }

  private initializeCategories(): void {
    this.apiService.getMenu().subscribe({
      next: data => (this.categories = data.menu),
      error: err => (this.categoriesError = err),
      complete: () => (this.categoriesIsLoading = false),
    });
  }

  private initializeReviews(): void {
    this.apiService.getReviews().subscribe({
      next: data => (this.reviews = data.reviews),
      error: err => (this.reviewsError = err),
      complete: () => (this.reviewsIsLoading = false),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isLoading(): boolean {
    return this.dishesIsLoading;
  }
}
