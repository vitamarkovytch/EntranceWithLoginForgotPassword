import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import {ForgottenPassComponent} from './forgotten-pass/forgotten-pass.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    ForgottenPassComponent
  ]
})
export class AuthLayoutModule { }
