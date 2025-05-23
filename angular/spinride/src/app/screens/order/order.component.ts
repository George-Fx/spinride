import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {BikeModel} from '@models/bike.model';
import {CartState} from '@services/cart.service';
import {MetaService} from '@services/meta.service';
import {CartService} from '@services/cart.service';
import {ModalService} from '@services/modal.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  svg = svg;
  list: BikeModel[] = [];
  subtotal = 0;
  total = 0;
  discount = 0;
  delivery = 0;
  isOpen = false;
  promocodeApplied = false;

  value = 'Code2024';

  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  cartState$!: Observable<CartState>;

  constructor(
    private router: Router,
    private cartService: CartService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.cartState$ = this.cartService.cartState$;

    this.setMeta();
    this.initializeCartState();

    this.modalService.isOpen$.subscribe(state => {
      this.isOpen = state;
    });
  }

  private initializeCartState(): void {
    this.cartState$.subscribe(state => {
      this.list = state.list || [];
      this.subtotal = state.subtotal || 0;
      this.total = state.total || 0;
      this.discount = state.discount || 0;
      this.delivery = state.delivery || 0;

      if (this.list.length === 0) {
        console.warn('Cart is empty. Redirecting to empty-cart screen...');
        this.router.navigate(['/order-empty']);
      }
    });
  }

  setPromocodeApplied(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.promocodeApplied = true;
  }

  private setMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;

        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#161E2F');
          this.metaService.setBackgroundColor('#F3F3F3');
        } else {
          this.metaService.setThemeColor('#F3F3F3');
          this.metaService.setBackgroundColor('#F3F3F3');
        }
      });
  }

  setValue(): void {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
