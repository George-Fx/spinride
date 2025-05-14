import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  standalone: false,
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  @Input() slides: any[] = [];
}
