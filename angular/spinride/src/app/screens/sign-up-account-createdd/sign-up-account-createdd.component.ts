import {svg} from '@svg/index';
import {URLS} from '@config/index';
import {Component, OnInit} from '@angular/core';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-sign-up-account-createdd',
  templateUrl: './sign-up-account-createdd.component.html',
  styleUrl: './sign-up-account-createdd.component.scss',
  standalone: false,
})
export class SignUpAccountCreateddComponent implements OnInit {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
