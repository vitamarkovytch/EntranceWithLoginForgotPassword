import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {AuthLayoutComponent} from './auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutRoutingModule
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ]
})
export class AuthLayoutModule { }
