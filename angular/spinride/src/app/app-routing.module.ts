import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShopComponent} from './screens/shop/shop.component';
import {FilterComponent} from './screens/filter/filter.component';
import {SignInComponent} from './screens/sign-in/sign-in.component';
import {SignUpComponent} from './screens/sign-up/sign-up.component';
import {ProfileComponent} from './screens/profile/profile.component';
import {ReviewsComponent} from './screens/reviews/reviews.component';
import {SignOutComponent} from './screens/sign-out/sign-out.component';
import {CheckoutComponent} from './screens/checkout/checkout.component';
import {InfoSavedComponent} from './screens/info-saved/info-saved.component';
import {CategoriesComponent} from './screens/categories/categories.component';
import {DescriptionComponent} from './screens/description/description.component';
import {NewPasswordComponent} from './screens/new-password/new-password.component';
import {OrderFailedComponent} from './screens/order-failed/order-failed.component';
import {EditProfileComponent} from './screens/edit-profile/edit-profile.component';
import {OrderHistoryComponent} from './screens/order-history/order-history.component';
import {MyPromocodesComponent} from './screens/my-promocodes/my-promocodes.component';
import {LeaveAReviewComponent} from './screens/leave-a-review/leave-a-review.component';
import {WishlistEmptyComponent} from './screens/wishlist-empty/wishlist-empty.component';
import {ForgotPasswordComponent} from './screens/forgot-password/forgot-password.component';
import {OrderSuccessfulComponent} from './screens/order-successful/order-successful.component';
import {VerifyYourEmailComponent} from './screens/verify-your-email/verify-your-email.component';
import {VerificationPhoneComponent} from './screens/verification-phone/verification-phone.component';
import {VerificationEmailComponent} from './screens/verification-email/verification-email.component';
import {MyPromocodesEmptyComponent} from './screens/my-promocodes-empty/my-promocodes-empty.component';
import {OrderHistoryEmptyComponent} from './screens/order-history-empty/order-history-empty.component';
import {EmailHasBeenVerifiedComponent} from './screens/email-has-been-verified/email-has-been-verified.component';
import {VerifyYourPhoneNumberComponent} from './screens/verify-your-phone-number/verify-your-phone-number.component';
import {SignUpAccountCreateddComponent} from './screens/sign-up-account-createdd/sign-up-account-createdd.component';
import {ShippingAndPaymentInfoComponent} from './screens/shipping-and-payment-info/shipping-and-payment-info.component';
import {ForgotPasswordSentEmailComponent} from './screens/forgot-password-sent-email/forgot-password-sent-email.component';
import {PhoneNumberHasBeenVerifiedComponent} from './screens/phone-number-has-been-verified/phone-number-has-been-verified.component';

// tab components
import {HomeComponent} from './screens/home/home.component';
import {BikeComponent} from './screens/bike/bike.component';
import {OrderComponent} from './screens/order/order.component';
import {WishlistComponent} from './screens/wishlist/wishlist.component';
import {OrderEmptyComponent} from './screens/order-empty/order-empty.component';

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
    path: 'shop',
    component: ShopComponent,
    data: {animation: 'ShopPage'},
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'new-password',
    component: NewPasswordComponent,
    data: {animation: 'NewPasswordPage'},
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
    data: {animation: 'SignOutPage'},
  },
  {
    path: 'description/:id',
    component: DescriptionComponent,
    data: {animation: 'DescriptionPage'},
  },
  {
    path: 'email-has-been-verified',
    component: EmailHasBeenVerifiedComponent,
    data: {animation: 'EmailHasBeenVerifiedPage'},
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'wishlist-empty',
    component: WishlistEmptyComponent,
  },
  {
    path: 'verify-your-phone-number',
    component: VerifyYourPhoneNumberComponent,
    data: {animation: 'VerifyYourPhoneNumberPage'},
  },
  {
    path: 'shipping-and-payment-info',
    component: ShippingAndPaymentInfoComponent,
    data: {animation: 'ShippingAndPaymentInfoPage'},
  },
  {
    path: 'verification-email',
    component: VerificationEmailComponent,
    data: {animation: 'VerificationEmailPage'},
  },
  {
    path: 'verification-phone',
    component: VerificationPhoneComponent,
    data: {animation: 'VerificationPhonePage'},
  },
  {
    path: 'verify-your-email',
    component: VerifyYourEmailComponent,
    data: {animation: 'VerifyYourEmailPage'},
  },
  {
    path: 'bike/:id',
    component: BikeComponent,
    data: {animation: 'BikePage'},
  },
  {
    path: 'phone-number-has-been-verified',
    component: PhoneNumberHasBeenVerifiedComponent,
    data: {animation: 'PhoneNumberHasBeenVerifiedPage'},
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
    path: '',
    component: SignInComponent,
    data: {animation: 'SignInPage'},
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
