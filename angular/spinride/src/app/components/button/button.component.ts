import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: false,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() routerLink: string | string[] | undefined;
  @Input() onClick!: () => void;
  @Input() colorScheme: 'primary' | 'secondary' = 'primary';
  @Input() containerStyle: {[key: string]: string} = {};

  linkStyles(): {[key: string]: string} {
    return {
      'background-color':
        this.colorScheme === 'primary'
          ? 'var(--main-orange)'
          : 'var(--white-color)',

      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      width: '100%',
      height: '50px',
      'border-radius': '50px',
      ...this.containerStyle,
    };
  }

  textStyles(): {[key: string]: string} {
    return {
      fontFamily: 'Mulish',
      fontSize: '16px',
      fontWeight: '600',
      textTransform: 'capitalize',
      color: this.colorScheme === 'primary' ? '#fff' : 'var(--main-color)',
    };
  }
}
