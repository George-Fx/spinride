import {Component, Input} from '@angular/core';

import {BicycleModel} from '../../models/bicycles.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  standalone: false,
})
export class RatingComponent {
  @Input() style?: string;
  @Input() bicycle?: BicycleModel;
}
