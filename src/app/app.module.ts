import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxFormValidatorModule} from '../../projects/ngx-form-validator/src/lib/ngx-form-validator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxFormValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
