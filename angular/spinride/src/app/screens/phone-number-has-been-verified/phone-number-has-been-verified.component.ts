import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';
import {VerificationService} from '@services/verification.service';

@Component({
  selector: 'app-phone-number-has-been-verified',
  standalone: false,
  templateUrl: './phone-number-has-been-verified.component.html',
  styleUrl: './phone-number-has-been-verified.component.scss',
})
export class PhoneNumberHasBeenVerifiedComponent implements OnInit {
  svg = svg;
  constructor(
    private metaService: MetaService,
    private verificationService: VerificationService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.setPhoneVerification();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  setPhoneVerification(): void {
    this.verificationService.setPhoneVerified();
  }
}
