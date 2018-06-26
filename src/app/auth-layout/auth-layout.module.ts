import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {AuthLayoutComponent} from './auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AuthLayoutRoutingModule
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ]
})
export class AuthLayoutModule { }
