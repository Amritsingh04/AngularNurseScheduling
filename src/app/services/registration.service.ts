import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseURL:string;
  constructor(private http:HttpClient,@Inject('BASE_URL') baseURL:string) { 
    this.baseURL='http://localhost:8080/nurseschedulingsystem/inse6260/api/';
  }

saveNurseRegistration(userInfo:any):Observable<boolean>
{
  const url='';
  console.log(userInfo);
  return this.http.post<any>(this.baseURL+url,
    {
      firstName:userInfo.value['firstName'],
      lastName:userInfo.value['lastName'],
      email:userInfo.value['email'],
      userName:userInfo.value['userName'],
      dob:userInfo.value['dob'],
      address:userInfo.value['address']
  });
}

saveHospitalRegistration(userInfo:any):Observable<boolean>
{
  const url='';
  console.log(userInfo);
  return this.http.post<any>(this.baseURL+url,
    {
      hospitalName:userInfo.value['hospitalName'],
      email:userInfo.value['email'],
      userName:userInfo.value['userName'],
      address:userInfo.value['address']
  });
}


}
