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
import {RecomendedComponent} from './components/recomended/recomended.component';
import {HomeReviewsComponent} from './components/home-reviews/home-reviews.component';
import {HomeCategoriesComponent} from './components/home-categories/home-categories.component';

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
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
    RecomendedComponent,
    HomeReviewsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}
