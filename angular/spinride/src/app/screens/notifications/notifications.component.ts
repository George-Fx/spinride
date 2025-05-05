import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';
import {MetaService} from '../../services/meta.service';
import {ModalService} from '../../services/modal.service';
import {NotificationModel} from '../../models/notification.model';

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationModel[] = [];
  notificationsIsLoading = true;
  notificationsError = '';

  isOpen = false;
  private destroy$ = new Subject<void>();

  readNotifications: Set<string> = new Set();

  constructor(
    private apiService: ApiService,
    private metaService: MetaService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.setMeta();
    this.initializeMeta();
    this.initializeNotifications();
  }

  private initializeNotifications(): void {
    this.apiService.getNotifications().subscribe({
      next: data => (this.notifications = data.notifications),
      error: err => (this.notificationsError = err),
      complete: () => (this.notificationsIsLoading = false),
    });
  }

  private initializeMeta(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }

  markAsRead(notificationId: string): void {
    this.readNotifications.add(notificationId);
  }

  isRead(notificationId: string): boolean {
    return this.readNotifications.has(notificationId);
  }

  private setMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.isOpen = state;

        if (this.isOpen) {
          this.metaService.setThemeColor('#fff');
          this.metaService.setBackgroundColor('#fff');
        } else {
          this.metaService.setThemeColor('#F6F9F9');
          this.metaService.setBackgroundColor('#F6F9F9');
        }
      });
  }
}
