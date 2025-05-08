import {Component} from '@angular/core';

import {URLS} from '@config/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-sign-up-account-createdd',
  templateUrl: './sign-up-account-createdd.component.html',
  styleUrl: './sign-up-account-createdd.component.scss',
  standalone: false,
})
export class SignUpAccountCreateddComponent {
  public URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
