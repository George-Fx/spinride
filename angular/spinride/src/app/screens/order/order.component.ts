import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartState} from '../../services/cart.service';
import {MetaService} from '../../services/meta.service';
import {CartService} from '../../services/cart.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  svg = svg;
  list: DishModel[] = [];
  subtotal = 0;
  total = 0;
  discount = 0;
  delivery = 0;
  isOpen = false;
  promocodeApplied = false;

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

  private setMeta(): void {
    if (this.isOpen) {
      this.metaService.setThemeColor('#F5FAFB');
      this.metaService.setBackgroundColor('#F5FAFB');
    }
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
}
