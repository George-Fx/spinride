import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {svg} from '@svg/index';
import {MenuModel} from '../../models/menu.model';

@Component({
  selector: 'app-home-categories',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeCategoriesComponent {
  svg = svg;
  @Input() categories: MenuModel[] = [];
}
