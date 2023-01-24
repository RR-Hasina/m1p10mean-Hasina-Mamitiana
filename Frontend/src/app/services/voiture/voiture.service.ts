import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global.constants';
import { Voiture } from 'src/app/models/voiture';
import { Composant } from 'src/app/models/composant';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  public creationVoiture(voiture: any): Observable<Voiture> {
    return this.http.post<Voiture>(GlobalConstants.apiURL + "/voiture/creation", voiture);
  }

  public getVoitureNoDepot(email: string): Observable<Voiture[]> {
    let data = { email: email };
    return this.http.post<Voiture[]>(GlobalConstants.apiURL + "/voiture/findDepot", data);
  }

  public depotVoiture(immatriculation: String, signalement: any[]): Observable<any> {
    let depot = {
      immatriculation: immatriculation,
      signalement: signalement
    }
    return this.http.post<Voiture[]>(GlobalConstants.apiURL + "/voiture/depot", depot);
  }

  public getListeVoiture(email: String): Observable<Voiture[]> {
    let data = { email: email };
    return this.http.post<Voiture[]>(GlobalConstants.apiURL + "/voiture/liste", data);
  }

  public getComposant(): Observable<Composant[]> {
    return this.http.get<Composant[]>(GlobalConstants.apiURL + "/atelier/composant");
  }

  public getListeVoitureDepot(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(GlobalConstants.apiURL + "/atelier/diagnostique/liste");
  }

  public diagnostique(immatriculation: String, listeComposant: Composant[]): Observable<Voiture> {
    let data = {
      immatriculation: immatriculation,
      composant: listeComposant,
      prixMo: 5000
    }
    return this.http.post<Voiture>(GlobalConstants.apiURL + "/atelier/diagnostique", data);
  }

  testFlux(): Observable<String[]> {
    return new Observable(observer => {
      setInterval(() => {
        observer.next();
      }, 1000);
    })
  }


}
