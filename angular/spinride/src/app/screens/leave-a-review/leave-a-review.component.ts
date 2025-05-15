import {Component} from '@angular/core';

import {URLS} from '@config/index';
import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';

@Component({
  selector: 'app-leave-a-review',
  standalone: false,
  templateUrl: './leave-a-review.component.html',
  styleUrl: './leave-a-review.component.scss',
})
export class LeaveAReviewComponent {
  svg = svg;
  URLS = URLS;
  value: string = 'Enter your review here...';
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#161E2F');
    this.metaService.setBackgroundColor('#F3F3F3');
  }

  openKeyboard() {
    const result = prompt('Enter text:', this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
