import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrl: './order-failed.component.scss',
  standalone: false,
})
export class OrderFailedComponent {
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
