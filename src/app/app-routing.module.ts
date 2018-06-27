import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './shared/service/auth.guard';

const routs: Routes = [
  {path: '', pathMatch: 'full', canActivate: [AuthGuard],
            loadChildren: './home/home.module#HomeModule'},
  {path: 'auth', loadChildren: './auth-layout/auth-layout.module#AuthLayoutModule'},
  {path: 'home', canActivate: [AuthGuard], loadChildren: './home/home.module#HomeModule'},
  {path: 'registration', loadChildren: './registration/registration.module#RegistrationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
