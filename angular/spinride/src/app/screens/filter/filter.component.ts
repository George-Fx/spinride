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

  suspensionTypes = ['No Suspension', 'Front Suspension', 'Full Suspension'];
  driveTrain = ['Single-speed', 'Electronic shifting', 'Multiple gears '];

  selectedStatus: string = this.status[1];
  selectedCategory: string = this.categories[1];
  selectedPreference: string = this.dietaryPreferences[1];
  selectedSuspensionType: string = this.suspensionType[1];
  selectedDriveTrain: string = this.driveTrain[1];

  selectedColor = signal<string | null>(null);

  selectColor(color: string): void {
    this.selectedColor.set(color);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  selectSuspensionType(suspensionType: string): void {
    this.selectedSuspensionType = suspensionType;
  }

  selectDriveTrain(driveTrain: string): void {
    this.selectedDriveTrain = driveTrain;
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
    this.selectedStatus = this.status[1];
    this.selectedCategory = this.categories[1];
    this.selectedPreference = this.dietaryPreferences[1];
    this.selectedSuspensionType = this.suspensionType[1];
    this.selectedDriveTrain = this.driveTrain[1];
    this.selectedColor.set(null);
  }
}
