import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {DishModel} from '../../models/dish.model';
import {CartService} from '../../services/cart.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  standalone: false,
})
export class CheckoutComponent implements OnInit {
  svg = svg;
  list: DishModel[] = [];
  total: number = 0;
  discount: number = 0;
  delivery: number = 0;

  constructor(
    private metaService: MetaService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.initializeMeta();
    this.initializeCartSubscription();
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }

  private initializeCartSubscription(): void {
    this.cartService.cartState$.subscribe(cart => {
      this.list = cart.list;
      this.total = cart.total;
      this.discount = cart.discount;
      this.delivery = cart.delivery;
    });
  }

  handleClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
