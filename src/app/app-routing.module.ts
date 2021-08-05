import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BgmusicComponent } from './bgmusic/bgmusic.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PopupComponent } from './popup/popup.component';
import { SetalarmComponent } from './setalarm/setalarm.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
