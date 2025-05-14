import {Subject} from 'rxjs';
import {Component} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

import {Banner} from '@models/banner.model';
import {BikeModel} from '@models/bike.model';
import {ApiService} from '@services/api.service';
import {MetaService} from '@services/meta.service';
import {CarouselModel} from '@models/carousel.model';
import {ModalService} from '@services/modal.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  banners: Banner[] = [];
  carousel: CarouselModel[] = [];

  carouselIsLoading = true;
  carouselError = '';

  bikes: BikeModel[] = [];
  bikesIsLoading = true;
  bikesError = '';

  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.getBikes();
    this.getCarousel();
  }

  private setMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;

        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#161E2F');
          this.metaService.setBackgroundColor('#F3F3F3');
        } else {
          this.metaService.setThemeColor('#F3F3F3');
          this.metaService.setBackgroundColor('#F3F3F3');
        }
      });
  }

  private getBikes(): void {
    this.apiService.getBikes().subscribe({
      next: data => (this.bikes = data.bikes),
      error: err => (this.bikesError = err),
      complete: () => (this.bikesIsLoading = false),
    });
  }

  private getCarousel(): void {
    this.apiService.getCarousel().subscribe({
      next: data => (this.carousel = data.carousel),
      error: err => (this.carouselError = err),
      complete: () => (this.carouselIsLoading = false),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isLoading(): boolean {
    return this.bikesIsLoading || this.carouselIsLoading;
  }
}
