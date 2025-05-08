import {Component, Input, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {BikeModel} from '../../models/bike.model';
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

  @Input() bike: BikeModel | undefined;

  constructor(private cartService: CartService) {}

  addToCart(bike: BikeModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(bike);
  }

  removeFromCart(bike: BikeModel, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.removeFromCart(bike);
  }

  ngOnInit(): void {}
}
