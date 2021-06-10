import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import{User} from '../interface/userInterface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
baseURL:string;
private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;

constructor(private http:HttpClient,@Inject('BASE_URL') baseURL:string) { 
  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  this.currentUser = this.currentUserSubject.asObservable();
  this.baseURL='http://localhost:8080/nurseschedulingsystem/inse6260/api/';
}

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

  submitUser(userInfo:any):Observable<User>{
    console.log('userHit'+userInfo);
    return this.http.get<User>(this.baseURL+'api/login?userName='+userInfo.value['userName']+'&password='+userInfo.value['password'])
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          this.currentUserSubject.next(user);
      }
      else{
        
          user=null as any;
      }
      //console.log(user);
      return user;
  }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
}

}
