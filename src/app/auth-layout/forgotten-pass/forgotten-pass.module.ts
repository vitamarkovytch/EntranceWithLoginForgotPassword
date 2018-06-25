import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ForgottenPassComponent} from './forgotten-pass.component';
import {ForgottenPassRoutingModule} from './forgotten-pass-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForgottenPassRoutingModule
  ],
  declarations: [
    ForgottenPassComponent
  ]
})
export class ForgottenPassModule { }
