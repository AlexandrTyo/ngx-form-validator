# NgxFormValidator

A library for form validator specifically for Angular 2+
Usage for Reactive Forms

![Chrome](http://icons.iconarchive.com/icons/google/chrome/48/Google-Chrome-icon.png) | ![Firefox](https://support.cdn.mozilla.net/static/sumo/img/favicon.ico) | ![IE](https://www.msccruises.co.uk/wcsstore/MSCB2CStoreFrontAssetStore//images/icon_ie.png) | ![Safari](https://aplweb.sercomtel.com.br/sistemas/areaCliente/img/logoSafari.png) | ![Opera](https://www.webcomponents.org/assets/opera.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | Latest ✔ |

## Installation

`ngx-form-validator` is available via [npm](https://www.npmjs.com/package/ngx-form-validator) and [yarn](https://yarnpkg.com/en/package/ngx-form-validator)

Using npm:
```bash
$ npm install ngx-form-validator --save
```

Using yarn:
```bash
$ yarn add ngx-form-validator
```

## Usage

Import `NgxFormValidatorModule` in your module(`YourModule`):
```typescript
// Import library module
import { NgxFormValidatorModule } from 'ngx-form-validator';

@NgModule({
  imports: [
    // ...
    NgxFormValidatorModule
  ]
})
export class YourModule { }
```

Now use in your template - simple variant
```html
<ngx-form-validator [control]="{componentForm}.controls.{name}"></ngx-form-validator>
```

or if control appears after dom render

```html
<ngx-form-validator *ngIf="{componentForm}.controls.{name}" [control]="{componentForm}.controls.{name}"></ngx-form-validator>
```

- **[control]**: Your Control - (where {componentForm} - your Reactive Form Name; {name} - your Control Name)
- **[propName]**: Your Control Name (type: String) (Used for Error pattern like "Enter a valid {propName}")


 Cover these cases: 'required', 'maxlength', 'minlength', 'email', 'pattern'.
 
 ## Creator
 
 #### Tomkin Olexandr
 - [@GitHub](https://github.com/AlexandrTyo)
 
 ## License
 
 #### The MIT License (MIT)