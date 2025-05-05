import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-info-saved',
  templateUrl: './info-saved.component.html',
  styleUrl: './info-saved.component.scss',
  standalone: false,
})
export class InfoSavedComponent {
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  private setMeta(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }
}
