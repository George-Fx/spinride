import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {DishModel} from '../../models/dish.model';
import {MetaService} from '../../services/meta.service';
import {WishlistState} from '../../services/wishlist.service';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  wishlist: DishModel[] = [];
  wishlistState$!: Observable<WishlistState>;

  constructor(
    private router: Router,
    private metaService: MetaService,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.initializeMeta();
    this.initializeSubscription();
  }

  private initializeSubscription(): void {
    const message =
      'Wishlist is empty. Redirecting to empty-wishlist screen...';

    this.wishlistService.wishlistState$.subscribe(dishes => {
      this.wishlist = dishes;
      if (this.wishlist.length === 0) {
        console.warn(message);
        this.router.navigate(['/wishlist-empty']);
      }
    });
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }
}
