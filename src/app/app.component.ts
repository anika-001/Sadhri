import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sadhri';

  constructor(private dialogRef: MatDialog) { }
  //function to call popup
  openDialog() {
    this.dialogRef.open(PopupComponent);
  }
  // openDialog() {
  //   const dialogRef = this.dialogRef.open(PopupComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}


