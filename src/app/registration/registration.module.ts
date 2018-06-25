import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
