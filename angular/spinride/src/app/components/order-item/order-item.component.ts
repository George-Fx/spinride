import {Component, Input, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BicycleModel} from '../../models/bicycles.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-order-item',
  standalone: false,
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent implements OnInit {
  svg = svg;
  appliedPromocode = false;

  @Input() bicycle: BicycleModel | undefined;

  constructor(private cartService: CartService) {}

  addToCart(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(bicycle);
  }

  removeFromCart(bicycle: BicycleModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.removeFromCart(bicycle);
  }

  ngOnInit(): void {}
}
