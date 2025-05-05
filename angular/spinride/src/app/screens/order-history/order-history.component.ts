import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {OrderModel} from '../../models/order.model';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
  standalone: false,
})
export class OrderHistoryComponent {
  svg = svg;
  ordersIsLoading = true;
  orders: OrderModel[] = [];
  openAccordions: Set<number> = new Set();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.apiService.getOrders().subscribe({
      next: data => (this.orders = data.orders),
      error: err => console.error(err),
      complete: () => (this.ordersIsLoading = false),
    });
  }

  toggleAccordion(orderId: number): void {
    if (this.openAccordions.has(orderId)) {
      this.openAccordions.delete(orderId);
    } else {
      this.openAccordions.add(orderId);
    }
  }
  setMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }
}
