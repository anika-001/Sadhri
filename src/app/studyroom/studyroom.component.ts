import { Component, OnInit } from '@angular/core';
import { studyroom } from '../JSON data/studyroom';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.component.html',
  styleUrls: ['./studyroom.component.scss']
})
export class StudyroomComponent implements OnInit {

  constructor() { }
  studydata:any;

  ngOnInit(): void {
    this.studydata= studyroom;
  }
}
