import {Component} from '@angular/core';

import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-order-history-empty',
  templateUrl: './order-history-empty.component.html',
  styleUrl: './order-history-empty.component.scss',
  standalone: false,
})
export class OrderHistoryEmptyComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
