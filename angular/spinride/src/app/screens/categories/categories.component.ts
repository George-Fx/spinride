import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {ModalService} from '@services/modal.service';
import {ApiService} from '@services/api.service';
import {MetaService} from '@services/meta.service';
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
  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.getCategories();
  }

  private setMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;

        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#161E2F');
          this.metaService.setBackgroundColor('#F3F3F3');
        } else {
          this.metaService.setThemeColor('#F3F3F3');
          this.metaService.setBackgroundColor('#F3F3F3');
        }
      });
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
