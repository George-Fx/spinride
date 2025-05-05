import {Component} from '@angular/core';

import {DishModel} from '../../models/dish.model';
import {svg} from '../../../../public/assets/svg';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-menu-list',
  standalone: false,
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  svg = svg;
  dishes: DishModel[] = [];
  filteredDishes: DishModel[] = [];
  dishesIsLoading = true;
  value: string = '';

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.fetchDishes();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }

  fetchDishes(): void {
    this.apiService.getDishes().subscribe({
      next: data => {
        this.dishes = data.dishes;
        this.filteredDishes = [...this.dishes];
      },
      error: err => console.error(err),
      complete: () => (this.dishesIsLoading = false),
    });
  }

  openKeyboard() {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
      this.filterDishes(this.value);
    }
  }

  filterDishes(value: string): void {
    this.filteredDishes = this.dishes.filter(dish =>
      dish.name.toLowerCase().includes(value.toLowerCase()),
    );
  }
}
