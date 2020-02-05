import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.mdoule';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './train/training/training.component';
import { CurrentTrainingComponent } from './train/current-training/current-training.component';
import { NewTrainingComponent } from './train/new-training/new-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditExerciceComponent } from './train/edit-exercice/edit-exercice.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { TrainingTableComponent } from './train/training-table/training-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    WelcomeComponent,
    NavbarComponent,
    EditExerciceComponent,
    TrainingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  entryComponents: [
    EditExerciceComponent
  ],
  providers: [    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
