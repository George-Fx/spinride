import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {isMobile} from 'react-device-detect';
import {Component, OnInit, OnDestroy} from '@angular/core';

import {URLS} from '../../config';
import {DishModel} from '../../models/dish.model';
import {MetaService} from '../../services/meta.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-order-empty',
  standalone: false,
  templateUrl: './order-empty.component.html',
  styleUrl: './order-empty.component.scss',
})
export class OrderEmptyComponent implements OnInit, OnDestroy {
  URLS = URLS;
  isMobile = isMobile;
  wishlist: DishModel[] = [];
  isOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.initializeMeta();
  }

  private initializeMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.isOpen = state;

        if (this.isOpen) {
          this.metaService.setThemeColor('#F5FAFB');
          this.metaService.setBackgroundColor('#F5FAFB');
        } else {
          this.metaService.setThemeColor('#F5FAFB');
          this.metaService.setBackgroundColor('#F5FAFB');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
