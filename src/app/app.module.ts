import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.mdoule';
import {PrimengModule} from './primeng/primeng-module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingMaterialComponent } from './train/training/training.component';
import { CurrentTrainingComponent } from './train/current-training/current-training.component';
import { NewTrainingComponent } from './train/new-training/new-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditExerciceComponent } from './train/edit-exercice/edit-exercice.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { TrainingTableComponent } from './train/training-table/training-table.component';
import { TestComponentComponent } from './primeng/test-component/test-component.component';
import { TestComponent } from './antng/test/test.component';
import {AntngModule} from './antng/antng.module';
import {CurrentTrainingPrimeNgComponent} from './primeng/current-training/current-training.component';
import {EditTrainingPrimeNgComponent} from './primeng/edit-training/edit-training.component';
import {NewTrainingPrimeNgComponent} from './primeng/new-training/new-training.component';
import {TrainingPrimeNgComponent} from './primeng/training/training.component';
import {TrainingTablePrimeNgComponent} from './primeng/training-table/training-table.component';
import { LoginPrimengComponent } from './primeng/login-primeng/login-primeng.component';
import { SignupPrimengComponent } from './primeng/signup-primeng/signup-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CurrentTrainingPrimeNgComponent,
    EditTrainingPrimeNgComponent,
    NewTrainingPrimeNgComponent,
    TrainingPrimeNgComponent,
    TrainingPrimeNgComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    WelcomeComponent,
    NavbarComponent,
    EditExerciceComponent,
    TrainingTableComponent,
    TestComponentComponent,
    TestComponent,
    TrainingMaterialComponent,
    TrainingTablePrimeNgComponent,
    LoginPrimengComponent,
    SignupPrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    PrimengModule,
    AntngModule
  ],
  entryComponents: [
    EditExerciceComponent
  ],
  providers: [    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
