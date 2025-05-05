export interface NotificationModel {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface NotificationsResponse {
  notifications: NotificationModel[];
}
