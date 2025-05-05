import {Component} from '@angular/core';

import {svg} from '../../../../public/assets/svg';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: false,
})
export class SignInComponent {
  svg = svg;
  rememberMe = false;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setThemeColor('#F6F9F9');
    this.metaService.setBackgroundColor('#F6F9F9');
  }

  setRememberMe(): void {
    this.rememberMe = !this.rememberMe;
  }
}
