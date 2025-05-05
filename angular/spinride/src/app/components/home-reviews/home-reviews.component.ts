import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {ReviewModel} from '../../models/review.model';

@Component({
  selector: 'app-home-reviews',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-reviews.component.html',
  styleUrl: './home-reviews.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeReviewsComponent {
  svg = svg;

  @Input() reviews: ReviewModel[] = [];

  constructor() {}
}
