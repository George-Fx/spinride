import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

import {svg} from '@svg/index';
import {BikeModel} from '@models/bike.model';
import {ApiService} from '@services/api.service';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(0.8)'}),
        animate('300ms ease-in', style({opacity: 1, transform: 'scale(1)'})),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({opacity: 0, transform: 'scale(0.8)'})),
      ]),
    ]),
  ],
})
export class ShopComponent implements OnInit {
  svg = svg;
  bikes: BikeModel[] = [];
  isLoading = true;
  wishlist: BikeModel[] = [];
  isSortingPopupOpen = false;
  public selectedCategory: string = 'Sale';

  modalData = [
    'Sale',
    'Top',
    'Newest',
    'Price: low to high',
    'Price: high to low',
  ];

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
  ) {}

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.closeSortingPopup();
  }

  openSortingPopup(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.isSortingPopupOpen = true;
  }

  closeSortingPopup(): void {
    this.isSortingPopupOpen = false;
  }

  ngOnInit(): void {
    this.setMeta();
    this.getBikes();
  }

  setMeta() {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  getBikes() {
    this.apiService.getBikes().subscribe({
      next: data => (this.bikes = data.bikes),
      error: error => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false),
    });
  }
}
