import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{User} from '../interface/userInterface';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
baseURL:string;

constructor(private http:HttpClient,@Inject('BASE_URL') baseURL:string) { 
  this.baseURL=baseURL;
}

  submitUser(userInfo:any):Observable<User>{
    console.log('userHit'+userInfo);
    return this.http.get<User>(this.baseURL+'UserController/checkGuides/?userName='+userInfo.userName+'&password='+userInfo.password);
  }

}
