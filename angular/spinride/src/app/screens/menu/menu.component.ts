import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {MenuModel} from '../../models/menu.model';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  svg = svg;
  isOpen = false;
  menu: MenuModel[] = [];
  value: string = '';
  showModal: boolean = false;
  menuIsLoading: boolean = true;
  menuError: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  private initializeMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.isOpen = state;

        if (this.isOpen) {
          this.metaService.setThemeColor('#fff');
          this.metaService.setBackgroundColor('#F5FAFB');
        } else {
          this.metaService.setThemeColor('#F5FAFB');
          this.metaService.setBackgroundColor('#F5FAFB');
        }
      });
  }

  ngOnInit(): void {
    this.initializeMeta();
  }

  openKeyboard() {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
