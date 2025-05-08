import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-wishlist-empty',
  standalone: false,
  templateUrl: './wishlist-empty.component.html',
  styleUrl: './wishlist-empty.component.scss',
})
export class WishlistEmptyComponent implements OnInit {
  public svg = svg;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#161E2F');
  }
}
