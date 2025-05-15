import {Subject} from 'rxjs';
import {isMobile} from 'react-device-detect';
import {Component, OnInit, OnDestroy} from '@angular/core';

import {URLS} from '@config/index';
import {svg} from '@svg/index';
import {BikeModel} from '@models/bike.model';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-order-empty',
  standalone: false,
  templateUrl: './order-empty.component.html',
  styleUrl: './order-empty.component.scss',
})
export class OrderEmptyComponent implements OnInit, OnDestroy {
  svg = svg;
  URLS = URLS;
  isMobile = isMobile;
  wishlist: BikeModel[] = [];
  isOpen = false;
  private destroy$ = new Subject<void>();

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
