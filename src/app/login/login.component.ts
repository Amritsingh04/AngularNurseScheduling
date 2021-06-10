import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logo:string;

  loginForm=this.fb.group({
    userName:[null,Validators.required],
    password:[null,Validators.required]
  });


  constructor(private fb:FormBuilder,private _login:LoginServiceService) {
    this.logo="../assets/images/Logonew.PNG";

   }

  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.loginForm);
    this._login.submitUser(this.loginForm).subscribe(s=>{console.log(s)
    if(s.userType=="H")
    {
      
    }
  
  });
  }
}
