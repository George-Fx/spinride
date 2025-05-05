import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

import {svg} from '../../../../public/assets/svg';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';
import {OnboardingModel} from '../../models/onboarding.model';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
  standalone: false,
})
export class OnboardingComponent {
  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
  ) {}

  svg = svg;
  activeSlide = 0;

  onboardingData: OnboardingModel[] = [];
  onboardingIsLoading = true;
  onboardingError = '';

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

  onSlideChange(e: any): void {
    const activeIndex = e?.startPosition;
    if (activeIndex !== undefined && activeIndex !== null) {
      this.activeSlide = activeIndex;
    }
  }

  ngOnInit(): void {
    this.initializeMeta();
    this.initializeOnboarding();
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }

  private initializeOnboarding(): void {
    this.apiService.getOnboarding().subscribe({
      next: data => (this.onboardingData = data.onboarding),
      error: err => (this.onboardingError = err),
      complete: () => (this.onboardingIsLoading = false),
    });
  }

  get currentTitle1() {
    return this.onboardingData[this.activeSlide]?.title1 || '';
  }

  get currentTitle2() {
    return this.onboardingData[this.activeSlide]?.title2 || '';
  }

  get descriptionLine1() {
    return this.onboardingData[this.activeSlide]?.description1 || '';
  }

  get descriptionLine2() {
    return this.onboardingData[this.activeSlide]?.description2 || '';
  }
}
