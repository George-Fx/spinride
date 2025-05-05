import {Component, OnInit} from '@angular/core';

import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-confirmation-code',
  standalone: false,
  templateUrl: './confirmation-code.component.html',
  styleUrl: './confirmation-code.component.scss',
})
export class ConfirmationCodeComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
