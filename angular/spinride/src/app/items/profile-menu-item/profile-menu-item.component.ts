import {Component, Input} from '@angular/core';

import {svg} from '../../../../public/assets/svg';

@Component({
  selector: 'app-profile-menu-item',
  templateUrl: './profile-menu-item.component.html',
  styleUrl: './profile-menu-item.component.scss',
  standalone: false,
})
export class ProfileMenuItemComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string = '';
  @Input() titleStyle: {[key: string]: string} = {};

  svg = svg;
}
