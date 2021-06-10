import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import{userType} from '../interface/userInterface';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  flagNurseForm=true;
  flagHospitalForm=false;

  registrationNurseForm=this.fb.group({
    firstName:[null,Validators.required],
    lastName:[null,Validators.required],
    userName:[null,Validators.required],
    email:[null,Validators.required],
    dob:[null,Validators.required],
    address:[null,Validators.required]
  });

  registrationHospitalForm=this.fb.group({
    hospitalName:[null,Validators.required],
    userName:[null,Validators.required],
    email:[null,Validators.required],
    address:[null,Validators.required]
  });

  options: userType[] = [
    { viewValue: 'Nurse', value: 'Nurse' },
    { viewValue: 'Hospital', value: 'Hospital' }

  ];


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  modifySelection(selectedValue:any)
  {
    console.log("test"+selectedValue);
    this.flagNurseForm=false;this.flagHospitalForm=false;
    selectedValue=="Nurse"?this.flagNurseForm=true: this.flagHospitalForm=true;

  }

  submitRegistration()
  {
    console.log(this.registrationNurseForm);

  }

  submitRegistrationHospital()
  {
    console.log(this.registrationHospitalForm);
  }
}
