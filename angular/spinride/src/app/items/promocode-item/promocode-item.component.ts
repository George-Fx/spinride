import {Component, Input, Output, EventEmitter} from '@angular/core';

import {svg} from '@svg/index';
import {Promocode} from '../../models/promocode.model';

@Component({
  selector: 'app-promocode-item',
  templateUrl: './promocode-item.component.html',
  styleUrl: './promocode-item.component.scss',
  standalone: false,
})
export class PromocodeItemComponent {
  @Input() promocode?: Promocode;
  @Output() copied = new EventEmitter<string>();

  svg = svg;

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`${text} code copied to clipboard`);
      },
      err => {
        console.error('Could not copy text: ', err);
      },
    );
  }
}
