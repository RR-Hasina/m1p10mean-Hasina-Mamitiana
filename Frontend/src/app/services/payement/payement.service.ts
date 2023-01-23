import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';
import { Voiture } from 'src/app/models/voiture';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  constructor(private http:HttpClient) { }

  public getNonpayer(kw:string,page:number,limit:number): Observable<any> {
    return this.http.get<any>(GlobalConstants.apiURL + "/voiture/nonPayer?kw="+kw+"&page="+page+"&limit="+limit);
  }

  public payer(imm:string,data:any): Observable<any> {

    return this.http.put<any>(GlobalConstants.apiURL + "/voiture/payement/"+imm,{date: data});
  }
}
