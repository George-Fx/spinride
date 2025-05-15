import {OwlOptions} from 'ngx-owl-carousel-o';
import {Component, Input} from '@angular/core';

import {CarouselModel} from '@models/carousel.model';

@Component({
  selector: 'app-home-carousel',
  standalone: false,
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  @Input() carousel: CarouselModel[] = [];

  activeSlide = 0;

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
}
