import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private route: ActivatedRoute, private router: Router ,private fb:FormBuilder,private _login:LoginServiceService) {
    this.logo="../assets/images/Logonew.PNG";

   }

  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.loginForm);
   const userType="H"
    userType=="H"?  this.router.navigate(['/NurseHome', 4 ]): this.router.navigate(['/HospitalHome', 4 ]);
    this._login.submitUser(this.loginForm).subscribe(s=>{console.log(s);
    s.userType=="H"?  this.router.navigate(['/NurseHome',  s.userId ]):this.router.navigate(['/HospitalHome', s.userId ]);
  }
  );
  }
}
