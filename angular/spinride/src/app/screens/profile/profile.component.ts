import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  svg = svg;

  constructor(private metaService: MetaService) {}

  profileMenuItems = [
    {
      id: 1,
      title: 'Personal info',
      icon: svg.profileUser,
      route: '/edit-profile',
    },
    {
      id: 2,
      title: 'Order history',
      icon: svg.calendar,
      route: '/order-history',
    },
    {
      id: 3,
      title: 'Order history empty',
      icon: svg.calendar,
      route: '/order-history-empty',
    },
    {
      id: 4,
      title: 'My promocodes',
      icon: svg.gift,
      route: '/my-promocodes',
    },
    {
      id: 5,
      title: 'My promocodes empty',
      icon: svg.gift,
      route: '/my-promocodes-empty',
    },
    {
      id: 6,
      title: 'My Reviews',
      icon: svg.smartphone,
      route: '/profile/reviews',
    },
    {
      id: 7,
      title: 'Sign out',
      icon: svg.mail,
      route: '/sign-out',
    },
    {
      id: 8,
      title: 'Sign out',
      icon: svg.profileLogOut,
      route: '/sign-out',
    },
    {
      id: 9,
      title: 'Sign out',
      icon: svg.cross,
      route: '/sign-out',
    },
  ];

  private setMeta(): void {
    this.metaService.setThemeColor('#F3F3F3');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  ngOnInit(): void {
    this.setMeta();
  }
}
