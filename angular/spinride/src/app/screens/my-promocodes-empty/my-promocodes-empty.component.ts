import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-my-promocodes-empty',
  templateUrl: './my-promocodes-empty.component.html',
  styleUrl: './my-promocodes-empty.component.scss',
  standalone: false,
})
export class MyPromocodesEmptyComponent {
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
