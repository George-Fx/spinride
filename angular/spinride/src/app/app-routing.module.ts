import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DishComponent} from './screens/dish/dish.component';
import {FilterComponent} from './screens/filter/filter.component';
import {SignInComponent} from './screens/sign-in/sign-in.component';
import {SignUpComponent} from './screens/sign-up/sign-up.component';
import {ReviewsComponent} from './screens/reviews/reviews.component';
import {CheckoutComponent} from './screens/checkout/checkout.component';
import {MenuListComponent} from './screens/menu-list/menu-list.component';
import {InfoSavedComponent} from './screens/info-saved/info-saved.component';
import {OnboardingComponent} from './screens/onboarding/onboarding.component';
import {NewPasswordComponent} from './screens/new-password/new-password.component';
import {OrderFailedComponent} from './screens/order-failed/order-failed.component';
import {EditProfileComponent} from './screens/edit-profile/edit-profile.component';
import {OrderHistoryComponent} from './screens/order-history/order-history.component';
import {MyPromocodesComponent} from './screens/my-promocodes/my-promocodes.component';
import {NotificationsComponent} from './screens/notifications/notifications.component';
import {LeaveAReviewComponent} from './screens/leave-a-review/leave-a-review.component';
import {ForgotPasswordComponent} from './screens/forgot-password/forgot-password.component';
import {OrderSuccessfulComponent} from './screens/order-successful/order-successful.component';
import {VerifyYourPhoneComponent} from './screens/verify-your-phone/verify-your-phone.component';
import {ConfirmationCodeComponent} from './screens/confirmation-code/confirmation-code.component';
import {MyPromocodesEmptyComponent} from './screens/my-promocodes-empty/my-promocodes-empty.component';
import {OrderHistoryEmptyComponent} from './screens/order-history-empty/order-history-empty.component';
import {SignUpAccountCreateddComponent} from './screens/sign-up-account-createdd/sign-up-account-createdd.component';
import {ForgotPasswordSentEmailComponent} from './screens/forgot-password-sent-email/forgot-password-sent-email.component';

// tab components
import {HomeComponent} from './screens/home/home.component';
import {MenuComponent} from './screens/menu/menu.component';
import {OrderComponent} from './screens/order/order.component';
import {WishlistComponent} from './screens/wishlist/wishlist.component';
import {FavoriteComponent} from './screens/favorite/favorite.component';
import {OrderEmptyComponent} from './screens/order-empty/order-empty.component';
import {FavoriteEmptyComponent} from './screens/favorite-empty/favorite-empty.component';
import {TrackYourOrderComponent} from './screens/track-your-order/track-your-order.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'dish/:id',
    component: DishComponent,
    data: {animation: 'DishPage'},
  },
  {
    path: 'menu-list',
    component: MenuListComponent,
    data: {animation: 'ShippingAndPaymentInfoPage'},
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
    data: {animation: 'NewPasswordPage'},
  },
  {
    path: 'verify-your-phone',
    component: VerifyYourPhoneComponent,
    data: {animation: 'VerifyYourPhonePage'},
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'order-empty',
    component: OrderEmptyComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: '',
    component: OnboardingComponent,
    data: {animation: 'OnboardingPage'},
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {animation: 'SignInPage'},
  },
  {
    path: 'track-your-order/:id',
    component: TrackYourOrderComponent,
    data: {animation: 'TrackYourOrderPage'},
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    data: {animation: 'ReviewsPage'},
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {animation: 'SignUpPage'},
  },
  {
    path: 'leave-a-review',
    component: LeaveAReviewComponent,
    data: {animation: 'LeaveAReviewsPage'},
  },
  {
    path: 'confirmation-code',
    component: ConfirmationCodeComponent,
    data: {animation: 'ConfirmationCodePage'},
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'favorite-empty',
    component: FavoriteEmptyComponent,
  },
  {
    path: 'order-successful',
    component: OrderSuccessfulComponent,
    data: {animation: 'OrderSuccessfulPage'},
  },
  {
    path: 'order-failed',
    component: OrderFailedComponent,
    data: {animation: 'OrderFailedPage'},
  },
  {
    path: 'info-saved',
    component: InfoSavedComponent,
    data: {animation: 'InfoSavedPage'},
  },
  {
    path: 'my-promocodes',
    component: MyPromocodesComponent,
    data: {animation: 'MyPromocodesPage'},
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: {animation: 'CheckoutPage'},
  },
  {
    path: 'sign-up-account-created',
    component: SignUpAccountCreateddComponent,
    data: {animation: 'SignUpAccountCreatedPage'},
  },
  {
    path: 'filter',
    component: FilterComponent,
    data: {animation: 'FilterPage'},
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: {animation: 'AboutPage'},
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    data: {animation: 'OrderHistoryPage'},
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {animation: 'ForgotPasswordPage'},
  },
  {
    path: 'order-history-empty',
    component: OrderHistoryEmptyComponent,
    data: {animation: 'OrderHistoryEmptyPage'},
  },
  {
    path: 'my-promocodes-empty',
    component: MyPromocodesEmptyComponent,
    data: {animation: 'MyPromocodesEmptyPage'},
  },
  {
    path: 'forgot-password-sent-email',
    component: ForgotPasswordSentEmailComponent,
    data: {animation: 'ForgotPasswordSentEmailPage'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
