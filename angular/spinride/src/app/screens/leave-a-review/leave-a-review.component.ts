import {Component} from '@angular/core';

import {URLS} from '../../config';
import {MetaService} from '../../services/meta.service';

@Component({
  selector: 'app-leave-a-review',
  standalone: false,
  templateUrl: './leave-a-review.component.html',
  styleUrl: './leave-a-review.component.scss',
})
export class LeaveAReviewComponent {
  URLS = URLS;
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta(): void {
    this.metaService.setThemeColor('#F5FAFB');
    this.metaService.setBackgroundColor('#F5FAFB');
  }
}
