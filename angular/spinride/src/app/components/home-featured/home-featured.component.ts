import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';

@Component({
  selector: 'app-home-featured',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeFeaturedComponent {
  svg = svg;

  @Input() bicycles: BicycleModel[] = [];
}
