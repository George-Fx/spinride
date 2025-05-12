import {Component, OnInit} from '@angular/core';

import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
  standalone: false,
})
export class NewPasswordComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
