import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-liste-voiture',
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.scss']
})
export class ListeVoitureComponent implements OnInit {

  constructor(private voitureService: VoitureService, private storageService: StorageService) { }
  ngOnInit(): void {

  }

}
