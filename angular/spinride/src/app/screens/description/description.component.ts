import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {BikeModel} from '@models/bike.model';
import {ApiService} from '@services/api.service';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-description',
  standalone: false,
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent implements OnInit {
  bike: BikeModel | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.getBikes();
  }

  setMeta() {
    this.metaService.setBackgroundColor('#F3F3F3');
    this.metaService.setThemeColor('#F3F3F3');
  }

  getBikes() {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.getBikes().subscribe({
      next: data => {
        this.bike = data.bikes.find(bike => String(bike.id) === id) || null;
      },
      error: error => {
        console.error('Error fetching categories:', error);
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false),
    });
  }
}
