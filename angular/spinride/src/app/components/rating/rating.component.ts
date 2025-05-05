import {Component, Input} from '@angular/core';

import {DishModel} from '../../models/dish.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  standalone: false,
})
export class RatingComponent {
  @Input() style?: string;
  @Input() dish?: DishModel;
}
