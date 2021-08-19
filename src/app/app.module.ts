import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFireStorageModule } from "@angular/fire/storage"
import firebase from 'firebase/app';
import { NotesComponent } from './notes/notes.component';
import { BgmusicComponent } from './bgmusic/bgmusic.component';
import { SetalarmComponent } from './setalarm/setalarm.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesandvidComponent } from './notesandvid/notesandvid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudyroomComponent } from './studyroom/studyroom.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { CalmroomComponent } from './calmroom/calmroom.component';
import { MallroomComponent } from './mallroom/mallroom.component';
import { HouseComponent } from './house/house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NgAuthService } from '../app/ng-auth.service';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    BgmusicComponent,
    SetalarmComponent,
    LoginComponent,
    PopupComponent,
    NotesandvidComponent,
    NavbarComponent,
    StudyroomComponent,
    BeachComponent,
    ForestComponent,
    CalmroomComponent,
    MallroomComponent,
    HouseComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatDialogModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
