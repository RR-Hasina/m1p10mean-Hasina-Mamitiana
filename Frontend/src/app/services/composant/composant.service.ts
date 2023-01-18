import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';

@Injectable({
  providedIn: 'root'
})
export class ComposantService {

  constructor(private http:HttpClient) { }

  getallpieces():Observable<any>{
    return this.http.get<any>(GlobalConstants.apiURL + "/composant/allPieces");
  }
}
