import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/index';
import { take, takeUntil } from 'rxjs/internal/operators';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-form-validator',
  template: `
    <div *ngIf="control?.invalid && control?.touched"
      class="alert-text"
    >
      <div [ngSwitch]="error">
        <div *ngSwitchCase="'required'"><div>Required field</div></div>
        <div *ngSwitchCase="'maxlength'">
          <div
            *ngIf="control.errors.maxlength.requiredLength; else maxLength_zero"
          >
            Must contain from 1 to
            {{ control.errors.maxlength.requiredLength }} symbols
          </div>
          <ng-template #maxLength_zero>
            Must contain at least
            {{ control.errors.maxlength.requiredLength }} symbols
          </ng-template>
        </div>
        <div *ngSwitchCase="'minlength'">
          Must contain at least
          {{ control.errors.minlength.requiredLength }} symbols
        </div>
        <div *ngSwitchCase="'email'">Enter a valid Email</div>
        <div *ngSwitchCase="'pattern'">
          Enter a valid {{ propName || 'value' }}
        </div>
        <div *ngSwitchDefault>Required correct field</div>
      </div>
    </div>
  `,
  styles: [
    `
      .alert-text {
        position: absolute;
        width: 100%;
        text-align: right;
        color: #980000;
        background-color: transparent;
        font-size: 13px;
      }
    `
  ]
})
export class NgxFormValidatorComponent implements OnInit, OnDestroy {
  @Input()
  control: AbstractControl;
  @Input()
  propName: string;
  error: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit() {
    this.initControl();
  }

  initControl() {
    this.control.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(newValue => {
        this.error = this.control.errors
          ? window['Object'].keys(this.control.errors)[0]
          : null;
      });
    this.error = this.control.errors
      ? window['Object'].keys(this.control.errors)[0]
      : null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
