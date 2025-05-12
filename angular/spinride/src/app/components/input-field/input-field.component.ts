import {Component, Input} from '@angular/core';

import {svg} from '@svg/index';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  standalone: false,
})
export class InputFieldComponent {
  svg = svg;

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() eyeOff: boolean = false;
  @Input() check: boolean = false;
  @Input() value: string = '';
  @Input() containerStyle: {[key: string]: string} = {};
  @Input() onChange: ((value: string) => void) | undefined;

  setValue(): void {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
