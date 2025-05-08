import {Component, Input} from '@angular/core';

import {BikeModel} from '@models/bike.model';
import {ReviewModel} from '@models/review.model';

@Component({
  selector: 'app-review-item',
  standalone: false,
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss',
})
export class ReviewItemComponent {
  @Input() review: ReviewModel | undefined;
}
