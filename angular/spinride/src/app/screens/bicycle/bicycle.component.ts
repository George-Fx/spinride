import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';
import {BicycleModel} from '../../models/bicycles.model';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-bicycle',
  standalone: false,
  templateUrl: './bicycle.component.html',
  styleUrl: './bicycle.component.scss',
})
export class BicycleComponent implements OnInit {
  public svg = svg;

  constructor(
    private metaService: MetaService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private wishlistService: WishlistService,
  ) {}

  bicycle: BicycleModel | null = null;
  wishlist: BicycleModel[] = [];

  activeSlide = 0;

  bicycles: BicycleModel[] = [];
  bicyclesIsLoading = true;
  bicyclesError = '';

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  ifInWishlist(bicycle: BicycleModel): boolean {
    return this.wishlist.some(item => item.id === bicycle.id);
  }

  onSlideChange(e: any): void {
    const activeIndex = e?.startPosition;
    if (activeIndex !== undefined && activeIndex !== null) {
      this.activeSlide = activeIndex;
    }
  }

  ngOnInit(): void {
    this.setMeta();
    this.fetchBicycles();
  }

  setMeta() {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  private fetchBicycles(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.fetchBicycles().subscribe({
      next: data => {
        this.bicycle =
          data.bicycles.find(bicycle => String(bicycle.id) === id) || null;
      },
      error: err => {
        this.bicyclesError = err;
      },
      complete: () => {
        this.bicyclesIsLoading = false;
      },
    });
  }

  setWishlist(): void {
    this.wishlistService.wishlistState$.subscribe(bicycles => {
      this.wishlist = bicycles;
    });
  }
}
