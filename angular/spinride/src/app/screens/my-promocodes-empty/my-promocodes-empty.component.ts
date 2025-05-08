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

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
