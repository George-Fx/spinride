import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-my-promocodes-empty',
  templateUrl: './my-promocodes-empty.component.html',
  styleUrl: './my-promocodes-empty.component.scss',
  standalone: false,
})
export class MyPromocodesEmptyComponent implements OnInit {
  svg = svg;
  URLS = URLS;

  value = '';

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161e2f');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  setValue(): void {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
