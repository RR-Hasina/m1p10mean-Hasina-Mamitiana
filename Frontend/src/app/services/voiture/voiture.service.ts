import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';
import { Voiture } from 'src/app/models/voiture';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  public creationVoiture(voiture: any): Observable<Voiture> {
    return this.http.post<Voiture>(GlobalConstants.apiURL + "/voiture/creation", voiture);
  }

  public getVoiture(email: any): Observable<Voiture[]> {
    return this.http.post<Voiture[]>(GlobalConstants.apiURL + "/voiture/findDepot", email);
  }

  public depotVoiture(immatriculation: String, signalement: any[]): Observable<any> {
    let depot = {
      immatriculation: immatriculation,
      signalement: signalement
    }
    return this.http.post<Voiture[]>(GlobalConstants.apiURL + "/voiture/depot", depot);
  }

}
