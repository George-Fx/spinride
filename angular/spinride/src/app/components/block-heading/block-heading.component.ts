import {Component, Input} from '@angular/core';

import {svg} from '../../../../public/assets/svg';

@Component({
  selector: 'app-block-heading',
  templateUrl: './block-heading.component.html',
  styleUrl: './block-heading.component.scss',
  standalone: false,
})
export class BlockHeadingComponent {
  @Input() title: string = '';
  @Input() routerLink: string = '';

  svg = svg;
}
