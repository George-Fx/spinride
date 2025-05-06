import {Component} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {ApiService} from '../../services/api.service';
import {Promocode} from '../../models/promocode.model';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-my-promocodes',
  templateUrl: './my-promocodes.component.html',
  styleUrl: './my-promocodes.component.scss',
  standalone: false,
})
export class MyPromocodesComponent {
  promocodes: Promocode[] = [];
  isLoading: boolean = true;
  svg = svg;

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
  ) {}
  ngOnInit(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');

    this.isLoading = true;
    this.apiService.getPromocodes().subscribe({
      next: data => {
        this.promocodes = data.promocodes;
        this.isLoading = false;
      },
      error: err => {
        console.error('Ошибка при загрузке данных:', err);
        this.isLoading = false;
      },
    });
  }
}
