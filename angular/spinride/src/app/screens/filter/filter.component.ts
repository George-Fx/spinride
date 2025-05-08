import {Component, OnInit, signal} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: false,
})
export class FilterComponent implements OnInit {
  svg = svg;

  constructor(private metaService: MetaService) {}

  status = ['sale', 'new', 'top'];

  colors = [
    {id: 1, code: '#FF6262', name: 'Pastel Red'},
    {id: 2, code: '#63C7FF', name: 'Maya Blue'},
    {id: 3, code: '#F8E7CD', name: 'Champagne'},
    {id: 4, code: '#161E2F', name: 'Eigengrau'},
    {id: 5, code: '#000000', name: 'Black'},
  ];

  categories = [
    'Road Bikes',
    'Electric Bikes',
    'Hybrid Bikes',
    'Mountain Bikes',
    'Specialty Bikes',
  ];

  suspensionType = ['No Suspension', 'Front Suspension', 'Full Suspension'];

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

  selectedColor = signal<string | null>(null);

  selectColor(color: string): void {
    this.selectedColor.set(color);
  }

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
    this.setMeta();
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  resetFilters(): void {
    this.selectedStatus = this.status[0];
    // this.selectedCategory = this.categories[0];
    this.selectedPreference = this.dietaryPreferences[0];
  }
}
