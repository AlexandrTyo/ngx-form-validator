import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private componentForm: FormGroup;
  constructor(
      private fb: FormBuilder
  ) {
    this.componentForm = this.fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])
      ],
      someNumber: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^\d+$/)
        ])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ])
      ],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9()\-+]*$/),
          Validators.maxLength(50)
        ])
      ],
      someMandotaryField: [null, Validators.required]
    });
  }

}