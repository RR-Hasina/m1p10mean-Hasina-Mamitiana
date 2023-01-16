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
  constructor(private storageService: StorageService, private voitureService: VoitureService) { }
  ngOnInit(): void {
    this.voitureService.getVoiture().subscribe({
      next: (data: Voiture[]) => {
        this.voitures = data;
      }
    })
  }
}
