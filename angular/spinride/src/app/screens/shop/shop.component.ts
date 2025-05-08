import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {BikeModel} from '@models/bike.model';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  svg = svg;
  bikes: BikeModel[] = [];
  isLoading = true;

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
  ) {}

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
