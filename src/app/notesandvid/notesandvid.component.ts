import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  btnClick()
  {
    this.splitted = (this.links).split("v=");
    this.makelink(this.splitted[1]);
  }
  vidlinks: IVidLinks[] = [];
  constructor(private _sanitizer: DomSanitizer) { }

  story = new FormGroup({
    content: new FormControl(' ')
  })

  ngOnInit(): void {
  
  }
  makelink(Vidlink: string) {
    this.url = "https://www.youtube.com/embed/" + Vidlink;
    this.vidlinks.push({ link: (this._sanitizer.bypassSecurityTrustResourceUrl(this.url)) })
    console.log(this.vidlinks);
  }

}
