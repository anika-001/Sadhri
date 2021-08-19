import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachComponent } from './beach/beach.component';
import { BgmusicComponent } from './bgmusic/bgmusic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForestComponent } from './forest/forest.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { LoginComponent } from './login/login.component';
import { MallroomComponent } from './mallroom/mallroom.component';
import { NotesComponent } from './notes/notes.component';
import { NotesandvidComponent } from './notesandvid/notesandvid.component';
import { PopupComponent } from './popup/popup.component';
import { SetalarmComponent } from './setalarm/setalarm.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudyroomComponent } from './studyroom/studyroom.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', 
  pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
    
  },
  {
    path: 'notesandvid',
    component: NotesandvidComponent
  },
  {
    path: 'studyroom',
    component: StudyroomComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },
  {
    path: 'forest',
    component: ForestComponent
  },
  {
    path: 'mall',
    component: MallroomComponent
  },
  {
    path: 'house',
    component: HouseComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'bgmusic',
    component: BgmusicComponent
  },
  {
    path: 'setalarm',
    component: SetalarmComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'popup',
    component: PopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
