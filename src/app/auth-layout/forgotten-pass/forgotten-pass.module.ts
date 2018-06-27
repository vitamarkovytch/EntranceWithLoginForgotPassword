import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ForgottenPassComponent} from './forgotten-pass.component';
import {ForgottenPassRoutingModule} from './forgotten-pass-routing.module';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ForgottenPassRoutingModule
  ],
  declarations: [
    ForgottenPassComponent
  ]
})
export class ForgottenPassModule { }
