import {Component} from '@angular/core';

import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrl: './order-successful.component.scss',
  standalone: false,
})
export class OrderSuccessfulComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
