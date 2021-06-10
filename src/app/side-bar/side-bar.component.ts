import { Component, OnInit } from '@angular/core';
import{User} from '../interface/userInterface';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public currentUser: User | undefined;
  isNurse:boolean=false;
  isHospi:boolean=false;
  constructor(private _login:LoginServiceService) { }

  ngOnInit(): void {
  }

  refreshUser()
  {
    this.currentUser=this._login.currentUserValue;
    this.isNurse= this.currentUser.userType=="T"?true:false;
    this.isHospi=this.currentUser.userType=="H"?true:false;
  }

}
