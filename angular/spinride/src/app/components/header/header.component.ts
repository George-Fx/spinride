import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {isMobile} from 'react-device-detect';
import {Component, Input, OnInit} from '@angular/core';

import {URLS} from '@config/index';
import {svg} from '@svg/index';
import {CartState} from '@services/cart.service';
import {CartService} from '@services/cart.service';
import {ModalService} from '@services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  svg = svg;
  URLS = URLS;
  @Input() title: string = '';
  @Input() showUser: Boolean = false;
  @Input() showLogo: Boolean = false;
  @Input() showSearch: Boolean = false;
  @Input() showBasket: Boolean = false;
  @Input() showGoBack: Boolean = false;
  @Input() showBurger: Boolean = false;
  @Input() showBorder: Boolean = false;
  @Input() showUserName: Boolean = false;
  @Input() goBackColor: string = 'main' || 'white';
  @Input() burgerColor: string = 'main' || 'white';
  @Input() titleStyle: {[key: string]: string} = {};
  @Input() headerStyle: {[key: string]: string} = {};

  cartState$: Observable<CartState>;

  isMobile = isMobile;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private location: Location,
    private modalService: ModalService,
  ) {
    this.cartState$ = this.cartService.cartState$;
  }

  openModal(): void {
    this.modalService.openModal();
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  toggleModal(): void {
    this.modalService.toggleModal();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.cartState$.subscribe(state => {
      this.total = state.total;
    });
  }

  get combinedStyles(): {[key: string]: string} {
    return {
      'max-width': this.isMobile ? '100%' : 'var(--screen-width)',
      'border-bottom': this.showBorder ? '1px solid #E2E2E2' : 'none',
      ...this.headerStyle,
    };
  }
}
