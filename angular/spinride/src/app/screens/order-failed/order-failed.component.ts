import {Component} from '@angular/core';

import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrl: './order-failed.component.scss',
  standalone: false,
})
export class OrderFailedComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
