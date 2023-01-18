import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http:HttpClient) { }

  addDepense(data:any):Observable<any>{
    return this.http.post<any>(GlobalConstants.apiURL+"/finance/depense",data);
  }
}
