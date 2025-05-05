import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-forgot-password-sent-email',
  templateUrl: './forgot-password-sent-email.component.html',
  styleUrl: './forgot-password-sent-email.component.scss',
  standalone: false,
})
export class ForgotPasswordSentEmailComponent {
  public URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
