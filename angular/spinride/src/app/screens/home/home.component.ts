import {Subject} from 'rxjs';
import {Component} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

import {Banner} from '../../models/banner.model';
import {MenuModel} from '../../models/menu.model';
import {ApiService} from '../../services/api.service';
import {ReviewModel} from '../../models/review.model';
import {MetaService} from '../../services/meta.service';
import {BicycleModel} from '../../models/bicycles.model';
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
  reviews: ReviewModel[] = [];
  carousel: CarouselModel[] = [];
  categories: MenuModel[] = [];

  bicycles: BicycleModel[] = [];
  bicyclesIsLoading = true;
  bicyclesError = '';

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
    this.setMeta();
    this.fetchProducts();
  }

  private modalSubscribe(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;
        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#fff');
          this.metaService.setBackgroundColor('#F3F3F3');
        } else {
          this.metaService.setThemeColor('#F3F3F3');
          this.metaService.setBackgroundColor('#F3F3F3');
        }
      });
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  private fetchProducts(): void {
    this.apiService.fetchBicycles().subscribe({
      next: data => (this.bicycles = data.bicycles),
      error: err => (this.bicyclesError = err),
      complete: () => (this.bicyclesIsLoading = false),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isLoading(): boolean {
    return this.bicyclesIsLoading;
  }

  // async loadData(): Promise<void> {
  //   // Загрузка данных
  //   this.bicycles = await this.dataService.getBicycles();
  // }
}
