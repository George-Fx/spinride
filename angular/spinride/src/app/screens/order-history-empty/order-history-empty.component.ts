import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {Component, OnInit} from '@angular/core';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-order-history-empty',
  templateUrl: './order-history-empty.component.html',
  styleUrl: './order-history-empty.component.scss',
  standalone: false,
})
export class OrderHistoryEmptyComponent implements OnInit {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
