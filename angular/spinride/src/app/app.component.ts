import {Component} from '@angular/core';
import {isMobile} from 'react-device-detect';
import {RouterOutlet} from '@angular/router';

import {swipeAnimation} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [swipeAnimation],
  standalone: false,
})
export class AppComponent {
  title = 'SpinRide';

  isMobile = isMobile;

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
