import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {svg} from '@svg/index';
import {MetaService} from '@services/meta.service';
import {ModalService} from '@services/modal.service';
import {VerificationState} from '@services/verification.service';
import {VerificationService} from '@services/verification.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  svg = svg;
  verificationState$!: Observable<VerificationState>;

  modalIsOpen = false;
  private destroy$ = new Subject<void>();

  constructor(
    private metaService: MetaService,
    private modalService: ModalService,
    private verificationService: VerificationService,
  ) {}

  isEmailVerified: boolean = false;
  isPhoneVerified: boolean = false;

  private setMeta(): void {
    this.modalService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.modalIsOpen = state;

        if (this.modalIsOpen) {
          this.metaService.setThemeColor('#161E2F');
          this.metaService.setBackgroundColor('#F3F3F3');
        } else {
          this.metaService.setThemeColor('#F3F3F3');
          this.metaService.setBackgroundColor('#F3F3F3');
        }
      });
  }

  setPhoneVerification(): void {
    this.verificationService.setPhoneVerified();
  }

  ngOnInit(): void {
    this.setMeta();
    this.verificationState$ = this.verificationService.verificationState$;
    this.verificationState$.subscribe(state => {
      this.isEmailVerified = state.isEmailVerified;
      this.isPhoneVerified = state.isPhoneVerified;
    });
  }
}
