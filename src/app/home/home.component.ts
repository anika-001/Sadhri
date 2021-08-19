import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { NgAuthService } from '../ng-auth.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addpopup: boolean = false;
  userID: any;
  logourl: any;
  shortcuts: any;

  constructor(private dialogRef: MatDialog, private router: Router, private as: NgAuthService, private db: AngularFirestore) { }
  //function to call popup
  openDialog() {
    this.dialogRef.open(PopupComponent);
  }

  formlinks = new FormGroup({
    link: new FormControl('', [Validators.required]),
    // date: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
    this.addpopup = false;

    this.as.getUserState()
      .subscribe(user => {
        if (user == null) { this.router.navigate(['/sign-in']) }
        else {
          this.userID = user.uid;
          this.getShortcuts();

        }
        console.log(this.userID)
        // this.getProjects();
      })
  }

  addlinkstodb() {
    const dbpath = `Shortcuts/${this.userID}/shortcuts`;
    this.db.collection(dbpath).add({ Links: this.formlinks.value.link, Logo: this.logourl, uid: this.userID }).then(e => {
      // 
      console.log(e)
    }).
      catch(e => { console.log(e) });
  }

  addlinks() {
    this.addpopup = false;
    console.log(this.formlinks.value);
    if (!this.formlinks.value.link.startsWith("http")) {
      this.formlinks.value.link = "https://" + this.formlinks.value.link;
    }
    this.logourl = "https://www.google.com/s2/favicons?sz=64&domain_url=" + this.getHostname(this.formlinks.value.link);
    this.addlinkstodb();
  }
  getHostname(url: string) {
    // if (!url.startsWith("http")) {
    //   url = "https://" + url;
    // }
    console.log(url);
    return new URL(url).hostname;
  }

  getShortcuts() {
    this.db.collection("Shortcuts").doc(this.userID).collection("shortcuts").snapshotChanges().subscribe(response => {
      this.shortcuts = response;
      // console.log(response);
      console.log(this.shortcuts[0].payload.doc.data());
    })

  }
}


