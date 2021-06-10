import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  logo:string;
  currentUserName: string | undefined;
  constructor(private _login:LoginServiceService) {
    this.logo="../assets/images/Logonew.PNG";
   }
  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser()
  {
    this.currentUserName= this._login.currentUserValue.firstName;
  }

}
