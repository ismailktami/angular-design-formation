import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGardService} from './auth/auth-grad.service';
import { TrainingPrimeNgComponent} from './primeng/training/training.component';
import {TrainingMaterialComponent} from './train/training/training.component';
import {TrainingAngComponent} from './antng/training/training.component';


const routes: Routes = [
  {path: '' , component: WelcomeComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path:'training/ngMaterial',component:TrainingMaterialComponent, canActivate: [AuthGardService]},
  {path: 'training/primeng' , component: TrainingPrimeNgComponent , canActivate: [AuthGardService]},
  {path:'training/antng',component:TrainingAngComponent, canActivate: [AuthGardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
