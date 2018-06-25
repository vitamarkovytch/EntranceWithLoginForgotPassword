import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForgottenPassComponent} from './forgotten-pass.component';

const routs: Routes = [
  {path: '', component: ForgottenPassComponent},
  {path: '', redirectTo: 'forgot-password', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule]
})
export class ForgottenPassRoutingModule { }
