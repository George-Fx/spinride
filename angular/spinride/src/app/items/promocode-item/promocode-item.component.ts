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
        this.copied.emit(`Promocode ${text} has been copied.`);
      },
      err => {
        console.error('Ошибка при копировании:', err);
        this.copied.emit('Ошибка при копировании промокода.');
      },
    );
  }
}
