import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';

const routs: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'forgot-password', loadChildren: './forgotten-pass/forgotten-pass.module#ForgottenPassModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule]
})

export class AuthLayoutRoutingModule {
}
