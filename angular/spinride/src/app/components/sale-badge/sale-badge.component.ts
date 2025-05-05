import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sale-badge',
  standalone: false,
  templateUrl: './sale-badge.component.html',
  styleUrl: './sale-badge.component.scss',
})
export class SaleBadgeComponent {
  @Input() style: string = '';
}
