import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';

@Injectable({
  providedIn: 'root'
})
export class BonsortieService {


  constructor(private http:HttpClient) { }

  public getvoiture(kw:string,page:number,limit:number): Observable<any> {
    return this.http.get<any>(GlobalConstants.apiURL + "/voiture/bonsortie?kw="+kw+"&page="+page+"&limit="+limit);
  }

  public validerBon(imm:string): Observable<any> {
    return this.http.put<any>(GlobalConstants.apiURL + "/voiture/"+imm+"/reparation/validerBon",null);
  }
}
