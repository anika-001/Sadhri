import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../ng-auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService,private router: Router
  ) { }
  navigateToRegister() {
    this.router.navigate(['/register-user'])
  }
  ngOnInit() { 
    
  }

}