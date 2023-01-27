import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import{ GlobalConstants } from '../../common/global.constants';
import { AES } from "crypto-js";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private code = 'garage-secret-jwt123';

  constructor(private http:HttpClient) { }

  public login(user:any,role:any):Observable<User> {
    user.role=role;
    return this.http.post<User>(GlobalConstants.apiURL+"/signin",user);
  }

  logout(): Observable<any> {
    return this.http.post(GlobalConstants.apiURL+ '/signout', { });
  }

  verifyUser = (code:any) => {
    return this.http.get(GlobalConstants.apiURL+ "/confirm/" + code);
  }

  register(nom: string,prenom: string, email: string, password: string,role:string): Observable<any> {
    return this.http.post(GlobalConstants.apiURL + '/signup',{nom,prenom, email,password,role});
  }

}
