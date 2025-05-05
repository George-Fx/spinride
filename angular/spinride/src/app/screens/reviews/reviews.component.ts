import {Component, OnInit} from '@angular/core';

import {ReviewModel} from '../../models/review.model';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  standalone: false,
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewModel[] = [];
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');

    this.isLoading = true;

    this.apiService.getReviews().subscribe({
      next: data => {
        this.reviews = data.reviews;
      },
      error: err => {
        console.error('Error loading reviews:', err);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
