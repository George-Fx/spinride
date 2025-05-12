import {Component} from '@angular/core';

import {URLS} from '@config/index';
import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
  standalone: false,
})
export class EditProfileComponent {
  svg = svg;
  URLS = URLS;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }
}
