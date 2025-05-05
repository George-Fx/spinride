import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {svg} from '../../../../public/assets/svg';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-track-your-order',
  standalone: false,
  templateUrl: './track-your-order.component.html',
  styleUrl: './track-your-order.component.scss',
})
export class TrackYourOrderComponent {
  svg = svg;
  orderId: string = '';

  statusData = [
    {
      id: 1,
      title: 'Order confirmed',
      description: 'Your order has been confirmed',
      confirmed: true,
    },
    {
      id: 2,
      title: 'Order is being cooked',
      description: 'Estimated for 9:12 pm',
      cooking: true,
    },
    {
      id: 3,
      title: 'Courier delivering',
      description: 'Estimated for 9:12 pm',
      courier: false,
    },
    {
      id: 4,
      title: 'Receiving',
      description: 'Estimated for 9:32 pm',
      confirmed: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.getOrderId();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }

  getOrderId(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.orderId = id;
  }
}
