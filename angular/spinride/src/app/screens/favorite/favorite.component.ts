import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {DishModel} from '../../models/dish.model';
import {MetaService} from '../../services/meta.service';
import {WishlistState} from '../../services/wishlist.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent implements OnInit {
  wishlist: DishModel[] = [];
  wishlistState$!: Observable<WishlistState>;

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
    const message =
      'Wishlist is empty. Redirecting to empty-wishlist screen...';

    this.wishlistService.wishlistState$.subscribe(list => {
      this.wishlist = list;
      if (this.wishlist.length === 0) {
        console.warn(message);
        this.router.navigate(['/favorite-empty']);
      }
    });
  }
}
