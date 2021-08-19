import { Component, OnInit } from '@angular/core';
import { navbar } from '../JSON data/Navlinks'
import { NgAuthService } from '../ng-auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navdata: any;
  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
    this.navdata = navbar;
  }
  

}
