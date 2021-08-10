import { Component, OnInit } from '@angular/core';
import { navbar } from '../JSON data/Navlinks'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navdata: any;
  constructor() { }

  ngOnInit(): void {
    this.navdata = navbar;
  }

}
