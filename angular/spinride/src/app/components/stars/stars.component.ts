import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: false,
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss',
})
export class StarsComponent {
  @Input() rating: number = 0;
}
