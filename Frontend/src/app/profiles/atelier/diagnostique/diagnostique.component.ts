import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-diagnostique',
  templateUrl: './diagnostique.component.html',
  styleUrls: ['./diagnostique.component.scss']
})
export class DiagnostiqueComponent implements OnInit {

  listeVoiture: Voiture[] = [];

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getListeVoitureDepot().subscribe({
      next: (data: Voiture[]) => {
        for (let i = 0; i < data.length; i++) {
          if (!data[i].reparation[data[i].reparation.length - 1]) {
            console.log(data[i]);
          }
        }
        
      }
    })
  }
}
