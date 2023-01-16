import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.scss']
})
export class AjoutVoitureComponent implements OnInit {
  voiture: any = {
    immatriculation: null,
    marque: null,
    nom: String = this.storageService.getUser().nom,
    prenom: String = this.storageService.getUser().prenom,
    email: String = this.storageService.getUser().email
  };
  errorMessage = '';
  message = '';
  ajoutErreur = false;
  constructor(private storageService: StorageService, private voitureService: VoitureService, private router: Router) { }
  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.voiture.immatriculation != null && this.voiture.marque != null) {
      this.voitureService.creationVoiture(this.voiture).subscribe({
        next: data => {
          console.log(data);
          this.ajoutErreur = false;
          this.voiture.immatriculation = null;
          this.voiture.marque = null;
          this.message="La voiture a été enregistrer!";
        },
        error: err => {
          this.ajoutErreur = true;
          this.errorMessage = err.error.message;
        }
      });
    }
  }
}
