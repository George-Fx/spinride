import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrl: './order-successful.component.scss',
  standalone: false,
})
export class OrderSuccessfulComponent {
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
