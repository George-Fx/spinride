import {Component, Input} from '@angular/core';

import {svg} from '../../../../public/assets/svg';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  standalone: false,
})
export class InputFieldComponent {
  svg = svg;

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() eyeOff: boolean = false;
  @Input() check: boolean = false;
  @Input() containerStyle: {[key: string]: string} = {};
  @Input() onChange: ((value: string) => void) | undefined;
}
