import {Component, OnInit} from '@angular/core';

import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-verification-email',
  standalone: false,
  templateUrl: './verification-email.component.html',
  styleUrl: './verification-email.component.scss',
})
export class VerificationEmailComponent implements OnInit {
  value: string = '';

  constructor(private metaService: MetaService) {}

  setValue(): void {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  ngOnInit(): void {
    this.setMeta();
  }
}
