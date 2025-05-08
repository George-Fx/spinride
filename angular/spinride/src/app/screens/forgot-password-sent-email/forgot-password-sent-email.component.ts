import {Component} from '@angular/core';

import {URLS} from '../../config';
import {svg} from '@svg/index';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-forgot-password-sent-email',
  templateUrl: './forgot-password-sent-email.component.html',
  styleUrl: './forgot-password-sent-email.component.scss',
  standalone: false,
})
export class ForgotPasswordSentEmailComponent {
  public svg = svg;
  public URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
