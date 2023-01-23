import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }

  public getvoiture(kw:string,page:number,limit:number): Observable<any> {
    return this.http.get<any>(GlobalConstants.apiURL + "/voiture/reparation?kw="+kw+"&page="+page+"&limit="+limit);
  }

  public getdetailsreparation(imm:string): Observable<any> {
    return this.http.get<any>(GlobalConstants.apiURL + "/voiture/"+imm+"/reparation");
  }

  public updateCompDateDeb(imm:string,data:any): Observable<any> {
    return this.http.put<any>(GlobalConstants.apiURL + "/voiture/"+imm+"/reparation/compDateDebut",data);
  }

  public updateCompDateFin(imm:string,data:any): Observable<any> {
    return this.http.put<any>(GlobalConstants.apiURL + "/voiture/"+imm+"/reparation/compDatefin",data);
  }
}
