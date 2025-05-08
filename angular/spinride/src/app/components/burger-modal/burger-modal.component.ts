import {Router} from '@angular/router';
import {Component, ChangeDetectorRef} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

import {URLS} from '../../config';
import {svg} from '@svg/index';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-burger-modal',
  standalone: false,
  templateUrl: './burger-modal.component.html',
  styleUrl: './burger-modal.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-100%)'})),
      transition('out => in', [animate('300ms ease-in')]),
      transition('in => out', [animate('300ms ease-out')]),
    ]),
  ],
})
export class BurgerModalComponent {
  svg = svg;
  URLS = URLS;
  isOpen = false;

  data = [
    {
      id: 1,
      title: 'Personal information',
      route: '/edit-profile',
    },
    {
      id: 2,
      title: 'My orders',
      route: '/order-history',
    },
    {
      id: 3,
      title: 'My orders empty',
      route: '/order-history-empty',
    },
    {
      id: 4,
      title: 'Promocodes & gift cards',
      route: '/my-promocodes',
    },
    {
      id: 5,
      title: 'Promocodes Empty',
      route: '/my-promocodes-empty',
    },
    {
      id: 6,
      title: 'Onboarding',
      route: '/',
    },
    {
      id: 8,
      title: 'Face ID',
      hasSwitch: true,
    },
    {
      id: 9,
      title: 'Support center',
    },
    {
      id: 10,
      title: 'Sign out',
      route: '/sign-in',
    },
  ];

  constructor(
    private modalService: ModalService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.modalService.isOpen$.subscribe(state => {
      this.isOpen = state;
    });
  }

  closeModal(): void {
    this.isOpen = false;
    this.modalService.closeModal();
    this.cdr.detectChanges();
  }

  handleClick(route: string): void {
    this.closeModal();
    this.router.navigate([route]);
  }
}
