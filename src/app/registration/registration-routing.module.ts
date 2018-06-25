import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegistrationComponent} from './registration.component';

const routs: Routes = [
  {path: '', component: RegistrationComponent},
  {path: '', redirectTo: 'registration', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
