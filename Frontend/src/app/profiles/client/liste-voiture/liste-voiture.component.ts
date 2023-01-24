import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Voiture } from 'src/app/models/voiture';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-liste-voiture',
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.scss']
})
export class ListeVoitureComponent implements OnInit, OnDestroy {

  listeVoiture: Voiture[] = [];
  subscription!:Subscription;

  constructor(private voitureService: VoitureService, private storageService: StorageService) { }
  ngOnInit(): void {
    this.voitureService.getListeVoiture(this.storageService.getUser().email).subscribe({
      next: (data: Voiture[]) => {
        this.listeVoiture = data;
        console.log(this.listeVoiture);
      }
    });

  }

  ngOnDestroy(): void {
   
  }
}

