import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import{ GlobalConstants } from '../common/global.constants';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(user:any,role:any):Observable<User> {
    user.role=role;
    return this.http.post<User>(GlobalConstants.apiURL+"/signin",user);
  }
}
