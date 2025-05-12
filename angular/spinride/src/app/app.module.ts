import {CommonModule} from '@angular/common';

import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgModule, isDevMode} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, ExtraOptions} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

import {COMPONENTS} from './resources';
import {routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';

// standalone components
import {HomeReviewsComponent} from './components/home-reviews/home-reviews.component';
import {HomeCategoriesComponent} from './components/home-categories/home-categories.component';
import {BestSellersComponent} from './components/best-sellers/best-sellers.component';
import {HomeFeaturedComponent} from './components/home-featured/home-featured.component';
import {ProfileComponent} from './screens/profile/profile.component';
import {WishlistEmptyComponent} from './screens/wishlist-empty/wishlist-empty.component';
import {ShopComponent} from './screens/shop/shop.component';
import {SignOutComponent} from './screens/sign-out/sign-out.component';
import {StarComponent} from './components/star/star.component';
import {SingleStarComponent} from './components/single-star/single-star.component';
import {CategoriesComponent} from './screens/categories/categories.component';
import {ShopItemComponent} from './items/shop-item/shop-item.component';
import {BikeComponent} from './screens/bike/bike.component';
import {DescriptionComponent} from './screens/description/description.component';
import {VerifyYourPhoneNumberComponent} from './screens/verify-your-phone-number/verify-your-phone-number.component';
import {PhoneNumberHasBeenVerifiedComponent} from './screens/phone-number-has-been-verified/phone-number-has-been-verified.component';
import {VerifyYourEmailComponent} from './screens/verify-your-email/verify-your-email.component';
import { EmailHasBeenVerifiedComponent } from './screens/email-has-been-verified/email-has-been-verified.component';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ProfileComponent,
    WishlistEmptyComponent,
    ShopComponent,
    SignOutComponent,
    StarComponent,
    SingleStarComponent,
    CategoriesComponent,
    ShopItemComponent,
    BikeComponent,
    DescriptionComponent,
    VerifyYourPhoneNumberComponent,
    PhoneNumberHasBeenVerifiedComponent,
    VerifyYourEmailComponent,
    EmailHasBeenVerifiedComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    RouterModule.forRoot(routes, routerOptions),
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HomeCategoriesComponent,
    HomeReviewsComponent,
    BestSellersComponent,
    HomeFeaturedComponent,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}
