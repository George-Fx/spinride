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
          ? 'var(--main-turquoise)'
          : 'transparent',

      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      width: '100%',
      height: '50px',
      'border-radius': '10px',
      border:
        this.colorScheme === 'primary'
          ? 'none'
          : '1px solid var(--main-turquoise)',
      ...this.containerStyle,
    };
  }

  textStyles(): {[key: string]: string} {
    return {
      fontFamily: 'DMSans',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'capitalize',
      color: this.colorScheme === 'primary' ? '#fff' : 'var(--main-turquoise)',
    };
  }
}
