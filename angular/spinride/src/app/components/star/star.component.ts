import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: false,
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent {
  @Input() strokeColor: string = '#000';
  @Input() fillColor: string = '#000';
}
