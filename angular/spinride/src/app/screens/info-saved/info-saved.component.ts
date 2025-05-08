import {Component} from '@angular/core';

import {URLS} from '../../config';
import {svg} from '@svg/index';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-info-saved',
  templateUrl: './info-saved.component.html',
  styleUrl: './info-saved.component.scss',
  standalone: false,
})
export class InfoSavedComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
