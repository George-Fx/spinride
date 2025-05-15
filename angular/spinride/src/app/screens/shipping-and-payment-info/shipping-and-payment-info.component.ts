import {Component, OnInit} from '@angular/core';

import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-shipping-and-payment-info',
  standalone: false,
  templateUrl: './shipping-and-payment-info.component.html',
  styleUrl: './shipping-and-payment-info.component.scss',
})
export class ShippingAndPaymentInfoComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  cvv = '123';
  expiryDate = '12/25';

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  setCvv(): void {
    const result = prompt('Enter cvv:', this.cvv);
    if (result !== null) {
      this.cvv = result;
    }
  }

  setExpiryDate(): void {
    const result = prompt('Enter expiry date:', this.expiryDate);
    if (result !== null) {
      this.expiryDate = result;
    }
  }
}
