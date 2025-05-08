import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: false,
})
export class FilterComponent implements OnInit {
  svg = svg;

  constructor(private metaService: MetaService) {}

  status = ['New', 'spicy'];
  categories = [
    'Salads',
    'Meat',
    'Pasta',
    'First courses',
    'Hot meals',
    'Sea food',
    'snacks',
  ];

  dietaryPreferences = [
    'Vegetarian',
    'Vegan',
    'Gluten-free',
    'Nut-free',
    'Keto',
    'Low-Fat',
    'Organic',
  ];

  selectedStatus: string = this.status[1];
  selectedCategory: string = this.categories[1];
  selectedPreference: string = this.dietaryPreferences[1];

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  selectPreference(preference: string): void {
    this.selectedPreference = preference;
  }

  selectStatus(status: string): void {
    this.selectedStatus = status;
  }

  ngOnInit(): void {
    this.initializeMeta();
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  resetFilters(): void {
    this.selectedStatus = this.status[0];
    this.selectedCategory = this.categories[0];
    this.selectedPreference = this.dietaryPreferences[0];
  }
}
