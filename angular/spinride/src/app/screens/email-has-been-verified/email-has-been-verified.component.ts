import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';
import {VerificationService} from '@services/verification.service';

@Component({
  selector: 'app-email-has-been-verified',
  standalone: false,
  templateUrl: './email-has-been-verified.component.html',
  styleUrl: './email-has-been-verified.component.scss',
})
export class EmailHasBeenVerifiedComponent implements OnInit {
  svg = svg;

  constructor(
    private metaService: MetaService,
    private verificationService: VerificationService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.setEmailVerification();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  setEmailVerification(): void {
    this.verificationService.setEmailVerified();
  }
}
