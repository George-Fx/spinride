import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  getProducts() {
    // return this.apiService.getProducts();
  }
}
