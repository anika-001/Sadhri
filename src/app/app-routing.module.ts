import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachComponent } from './beach/beach.component';
import { BgmusicComponent } from './bgmusic/bgmusic.component';
import { ForestComponent } from './forest/forest.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { LoginComponent } from './login/login.component';
import { MallroomComponent } from './mallroom/mallroom.component';
import { NotesComponent } from './notes/notes.component';
import { NotesandvidComponent } from './notesandvid/notesandvid.component';
import { PopupComponent } from './popup/popup.component';
import { SetalarmComponent } from './setalarm/setalarm.component';
import { StudyroomComponent } from './studyroom/studyroom.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
