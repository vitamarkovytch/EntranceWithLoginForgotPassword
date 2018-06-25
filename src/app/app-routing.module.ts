import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routs: Routes = [
  {path: '', loadChildren: './auth-layout/auth-layout.module#AuthLayoutModule'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'registration', loadChildren: './registration/registration.module#RegistrationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
