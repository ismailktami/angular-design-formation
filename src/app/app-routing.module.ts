import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './train/training/training.component';
import {AuthGardService} from './auth/auth-grad.service';
import {TestComponentComponent} from './primeng/test-component/test-component.component';
import {TestComponent} from './antng/test/test.component';

const routes: Routes = [
  {path: '' , component: WelcomeComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'training' , component: TrainingComponent, canActivate: [AuthGardService]},
  {path:'primeng',component:TestComponentComponent},
  {path:'antng',component:TestComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
