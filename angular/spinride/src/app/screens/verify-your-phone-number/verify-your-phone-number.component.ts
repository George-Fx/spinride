import {Component, OnInit} from '@angular/core';

import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-verify-your-phone-number',
  standalone: false,
  templateUrl: './verify-your-phone-number.component.html',
  styleUrl: './verify-your-phone-number.component.scss',
})
export class VerifyYourPhoneNumberComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  private setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  ngOnInit(): void {
    this.setMeta();
  }
}
