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
}
