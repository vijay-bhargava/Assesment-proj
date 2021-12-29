import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsComponent } from './experts/experts.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhatitisComponent } from './whatitis/whatitis.component';

const routes: Routes = [
  { path: 'what-it-is', component: WhatitisComponent },
  { path: 'how-it-works', component: HowitworkComponent },
  { path: 'directory', component: ExpertsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
