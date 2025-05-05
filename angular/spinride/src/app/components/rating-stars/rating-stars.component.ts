import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  standalone: false,
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.scss',
})
export class RatingStarsComponent {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();
  @Input() containerStyle: {[key: string]: string} = {};

  setRating(value: number): void {
    this.rating = this.rating === value ? 0 : value;
    this.ratingChange.emit(this.rating);
  }
}
