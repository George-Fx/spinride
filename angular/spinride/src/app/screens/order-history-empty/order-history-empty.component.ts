import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-order-history-empty',
  templateUrl: './order-history-empty.component.html',
  styleUrl: './order-history-empty.component.scss',
  standalone: false,
})
export class OrderHistoryEmptyComponent {
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
