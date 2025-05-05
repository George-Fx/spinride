import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {URLS} from '../../config';
import {DishModel} from '../../models/dish.model';
import {MetaService} from '../../services/meta.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-favorite-empty',
  standalone: false,
  templateUrl: './favorite-empty.component.html',
  styleUrl: './favorite-empty.component.scss',
})
export class FavoriteEmptyComponent implements OnInit {
  URLS = URLS;
  wishlist: DishModel[] = [];

  constructor(
    private router: Router,
    private metaService: MetaService,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.setWishlist();
  }

  setMeta() {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }

  setWishlist() {
    this.wishlistService.wishlistState$.subscribe(list => {
      this.wishlist = list;
    });

    const message =
      'Wishlist is empty. Redirecting to empty-wishlist screen...';

    if (this.wishlist.length > 0 && this.router.url === '/favorite-empty') {
      console.warn(message);
      this.router.navigate(['/favorite']);
    }
  }
}
