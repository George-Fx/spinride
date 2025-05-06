import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';

@Component({
  selector: 'app-best-sellers',
  imports: [CommonModule, RouterModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BestSellersComponent {
  svg = svg;

  @Input() bicycles: BicycleModel[] = [];
}
