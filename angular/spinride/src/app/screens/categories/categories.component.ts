import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';
import {CategoryModel} from '../../models/category.model';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];
  isLoading = true;

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.getCategories();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  getCategories(): void {
    this.apiService.getCategories().subscribe({
      next: data => (this.categories = data.categories),
      error: error => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false),
    });
  }
}
