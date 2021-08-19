import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgAuthService } from '../ng-auth.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

interface IVidLinks 
{
  link: SafeUrl;
}

@Component({
  selector: 'app-notesandvid',
  templateUrl: './notesandvid.component.html',
  styleUrls: ['./notesandvid.component.scss']
})
export class NotesandvidComponent implements OnInit {

  links: string = '';
  i: any = 0;
  splitted: any;
  url: any;
  userID:any;
  videos:any;
  video:any = [];

  formnote = new FormGroup({
    note: new FormControl('', [Validators.required]),
    // date: new FormControl('', [Validators.required])
  })
  formvids = new FormGroup({
    link: new FormControl('', [Validators.required]),
    // date: new FormControl('', [Validators.required])
  })
  btnClick()
  {
    this.splitted = (this.formvids.value.link).split("v=");
    this.makelink(this.splitted[1]);
  }
  // vidlinks: IVidLinks[] = [];
  constructor(private _sanitizer: DomSanitizer, private router: Router, private as: NgAuthService, private db: AngularFirestore) { }

  story = new FormGroup({
    content: new FormControl(' ')
  })

  savenote()
  {
    console.log(this.formnote.value);
    const dbpath = `Notes/${this.userID}/notes`;
    this.db.doc(dbpath).update({ Notes: this.formnote.value, uid: this.userID }).then(e => {
      // 
      console.log(e)
    }).
      catch(e => { console.log(e) });
  }

  ngOnInit(): void {
    this.as.getUserState()
      .subscribe(user => {
        if (user == null) { this.router.navigate(['/sign-in']) }
        else {
          this.userID = user.uid;
          // this.getShortcuts();
      this.getvids()

        }
        console.log(this.userID)
        // this.getProjects();
      })
  }

  savevidlink()
  {
    const dbpath = `Embedvids/${this.userID}/vids`;
    this.db.collection(dbpath).add({ Links: this.url, uid: this.userID }).then(e => {
      // 
      console.log(e)
    }).
      catch(e => { console.log(e) });
  }

  makelink(Vidlink: string) {
    this.url = "https://www.youtube.com/embed/" + Vidlink ;
    // this.vidlinks.push({ link: (this._sanitizer.bypassSecurityTrustResourceUrl(this.url)) })
    this.savevidlink();
    // console.log(this.vidlinks);
  }
  getvids(){
    this.db.collection("Embedvids").doc(this.userID).collection("vids").snapshotChanges().subscribe(response => {
      this.videos = response;
      // console.log(response);
      // console.log(this.videos[0].payload.doc.data());

      // this.i = 0;

      for(let val of this.videos)
      {
        this.video = [];
        console.log(val.payload.doc.data()["Links"])
        this.video.push({ link: (this._sanitizer.bypassSecurityTrustResourceUrl(val.payload.doc.data()["Links"])) })
        // this.i=+1;
      }
      console.log(this.video)

      // console.log(this.videos[0].payload.doc.data()["Links"])

  })
}

}
