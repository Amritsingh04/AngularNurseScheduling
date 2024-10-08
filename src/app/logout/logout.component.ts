import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _login:LoginServiceService) {
    this.logoutCall();
   }

  ngOnInit(): void {
  }

  logoutCall()
  {
    this._login.logout();
  }

}
