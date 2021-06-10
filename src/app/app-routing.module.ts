import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
import { LoginComponent } from './login/login.component';
import { NurseHomeComponent } from './nurse-home/nurse-home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
   path: 'login',
   component: LoginComponent, pathMatch: 'full'
 },
   {
    path: 'registration',
    component: RegistrationComponent, pathMatch: 'full'
  },
  {
    path: 'NurseHome/:id',
    component: NurseHomeComponent, pathMatch: 'full'
  },
  {
    path: 'HospitalHome/:id',
    component: HospitalHomeComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
