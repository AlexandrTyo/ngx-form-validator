import { NgModule } from '@angular/core';
import { NgxFormValidatorComponent } from './ngx-form-validator.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [NgxFormValidatorComponent],
  imports: [CommonModule
  ],
  exports: [NgxFormValidatorComponent]
})
export class NgxFormValidatorModule { }
