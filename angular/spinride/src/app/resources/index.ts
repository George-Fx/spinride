// Screens
import {MenuComponent} from '../screens/menu/menu.component';
import {FilterComponent} from '../screens/filter/filter.component';
import {SignInComponent} from '../screens/sign-in/sign-in.component';
import {SignUpComponent} from '../screens/sign-up/sign-up.component';
import {ReviewsComponent} from '../screens/reviews/reviews.component';
import {CheckoutComponent} from '../screens/checkout/checkout.component';
import {InfoSavedComponent} from '../screens/info-saved/info-saved.component';
import {OnboardingComponent} from '../screens/onboarding/onboarding.component';
import {EditProfileComponent} from '../screens/edit-profile/edit-profile.component';
import {NewPasswordComponent} from '../screens/new-password/new-password.component';
import {OrderFailedComponent} from '../screens/order-failed/order-failed.component';
import {MyPromocodesComponent} from '../screens/my-promocodes/my-promocodes.component';
import {OrderHistoryComponent} from '../screens/order-history/order-history.component';
import {LeaveAReviewComponent} from '../screens/leave-a-review/leave-a-review.component';
import {ForgotPasswordComponent} from '../screens/forgot-password/forgot-password.component';
import {OrderSuccessfulComponent} from '../screens/order-successful/order-successful.component';
import {VerificationPhoneComponent} from '../screens/verification-phone/verification-phone.component';
import {VerificationEmailComponent} from '../screens/verification-email/verification-email.component';
import {OrderHistoryEmptyComponent} from '../screens/order-history-empty/order-history-empty.component';
import {MyPromocodesEmptyComponent} from '../screens/my-promocodes-empty/my-promocodes-empty.component';
import {SignUpAccountCreateddComponent} from '../screens/sign-up-account-createdd/sign-up-account-createdd.component';
import {ForgotPasswordSentEmailComponent} from '../screens/forgot-password-sent-email/forgot-password-sent-email.component';

// Items
import {ReviewItemComponent} from '../items/review-item/review-item.component';
import {OrderItemComponent} from '../components/order-item/order-item.component';
import {WishlistItemComponent} from '../items/wishlist-item/wishlist-item.component';
import {PromocodeItemComponent} from '../items/promocode-item/promocode-item.component';
import {ProfileMenuItemComponent} from '../items/profile-menu-item/profile-menu-item.component';

// Tabs
import {HomeComponent} from '../screens/home/home.component';
import {OrderComponent} from '../screens/order/order.component';
import {WishlistComponent} from '../screens/wishlist/wishlist.component';
import {OrderEmptyComponent} from '../screens/order-empty/order-empty.component';

// App Components
import {StarsComponent} from '../components/stars/stars.component';
import {RatingComponent} from '../components/rating/rating.component';
import {HeaderComponent} from '../components/header/header.component';
import {ButtonComponent} from '../components/button/button.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {SwitcherComponent} from '../components/switcher/switcher.component';
import {SaleBadgeComponent} from '../components/sale-badge/sale-badge.component';
import {InputFieldComponent} from '../components/input-field/input-field.component';
import {RatingStarsComponent} from '../components/rating-stars/rating-stars.component';
import {BurgerModalComponent} from '../components/burger-modal/burger-modal.component';
import {BlockHeadingComponent} from '../components/block-heading/block-heading.component';
import {HomeCarouselComponent} from '../components/home-carousel/home-carousel.component';
import {BottomTabBarComponent} from '../components/bottom-tab-bar/bottom-tab-bar.component';

export const SCREEN_COMPONENTS = [
  MenuComponent,
  StarsComponent,
  SignInComponent,
  FilterComponent,
  SignUpComponent,
  ReviewsComponent,
  CheckoutComponent,
  InfoSavedComponent,
  OnboardingComponent,
  OrderFailedComponent,
  EditProfileComponent,
  NewPasswordComponent,
  MyPromocodesComponent,
  OrderHistoryComponent,
  HomeCarouselComponent,
  LeaveAReviewComponent,
  ForgotPasswordComponent,
  OrderSuccessfulComponent,
  VerificationEmailComponent,
  VerificationPhoneComponent,
  OrderHistoryEmptyComponent,
  MyPromocodesEmptyComponent,
  SignUpAccountCreateddComponent,
  ForgotPasswordSentEmailComponent,
];

export const ITEM_COMPONENTS = [
  OrderItemComponent,
  ReviewItemComponent,
  WishlistItemComponent,
  PromocodeItemComponent,
  ProfileMenuItemComponent,
];

export const TAB_COMPONENTS = [
  HomeComponent,
  OrderComponent,
  WishlistComponent,
  OrderEmptyComponent,
];

export const APP_COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  LoaderComponent,
  RatingComponent,
  SwitcherComponent,
  SaleBadgeComponent,
  InputFieldComponent,
  RatingStarsComponent,
  BurgerModalComponent,
  BlockHeadingComponent,
  BottomTabBarComponent,
];

export const COMPONENTS = [
  ...SCREEN_COMPONENTS,
  ...ITEM_COMPONENTS,
  ...TAB_COMPONENTS,
  ...APP_COMPONENTS,
];
