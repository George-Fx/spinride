import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: false,
})
export class SignUpComponent implements OnInit {
  svg = svg;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
