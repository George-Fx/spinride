import {Component} from '@angular/core';

import {URLS} from '@config/index';
import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-forgot-password-sent-email',
  templateUrl: './forgot-password-sent-email.component.html',
  styleUrl: './forgot-password-sent-email.component.scss',
  standalone: false,
})
export class ForgotPasswordSentEmailComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
