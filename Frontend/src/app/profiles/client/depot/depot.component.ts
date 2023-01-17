import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  voitures?: Voiture[];
  email: any = {
    email: String = this.storageService.getUser().email
  }
  signalement: String = "";
  listeSingnalement: any[] = [];
  immatriculation: String = "";
  errorMessage = '';
  message = '';
  ajoutErreur = false;
  depotValider = false;

  constructor(private storageService: StorageService, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getVoiture(this.email).subscribe({
      next: (data: Voiture[]) => {
        this.voitures = data;
        console.log(this.voitures);
      }
    })
  }

  ajoutSignalement(): void {
    this.listeSingnalement.push(this.signalement);
    console.log(this.immatriculation);
  }

  depotVoiture(): void {
    if (this.immatriculation != "") {
      this.voitureService.depotVoiture(this.immatriculation, this.listeSingnalement).subscribe({
        next: data => {
          console.log(data);
          this.message = "Votre voiture a été déposé";
          this.listeSingnalement = [];
          window.location.reload();
        },
        error: err => {
          this.ajoutErreur = true;
          this.errorMessage = "Il y a une erreur de déposition";
        }
      })
    }
  }

}
