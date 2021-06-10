import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/userInterface';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  logo:string;
  currentUserName: string | undefined;
  currentUser: User | undefined;
  constructor(private _login:LoginServiceService,private router: Router) {
    this.logo="../assets/images/Logonew.PNG";
   }
  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser()
  {
    this.currentUser=this._login.currentUserValue;
    if(!this.currentUser.isAuthenticated)
    {
      this.router.navigate(['/login'])
    }

    this.currentUserName= this._login.currentUserValue.firstName;
    

  }

}
