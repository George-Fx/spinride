import {Component, OnInit} from '@angular/core';

import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-verify-your-phone',
  standalone: false,
  templateUrl: './verify-your-phone.component.html',
  styleUrl: './verify-your-phone.component.scss',
})
export class VerifyYourPhoneComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
