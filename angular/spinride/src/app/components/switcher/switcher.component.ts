import {Component} from '@angular/core';

@Component({
  selector: 'app-switcher',
  standalone: false,
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss',
})
export class SwitcherComponent {
  on = false;

  constructor() {}

  toggleSwitch(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.on = !this.on;
  }
}
