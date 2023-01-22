import { Component, OnInit } from '@angular/core';
import { Composant } from 'src/app/models/composant';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-diagnostique',
  templateUrl: './diagnostique.component.html',
  styleUrls: ['./diagnostique.component.scss']
})
export class DiagnostiqueComponent implements OnInit {

  listeVoiture: Voiture[] = [];
  listeComposant: Composant[] = [];
  index?: number;
  todo: string[] = [];
  listeComposantReparer: Composant[] = [];
  done: string[] = [];
  selectedValues = [];
  composantDiagnostique: Composant[] = [];

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getListeVoitureDepot().subscribe({
      next: (data: Voiture[]) => {
        for (let i = 0; i < data.length; i++) {
          if (!data[i].reparation[data[i].reparation.length - 1]) {
            this.listeVoiture.push(data[i]);
          }
        }
      }
    });
    this.voitureService.getComposant().subscribe({
      next: (data: Composant[]) => {
        this.listeComposant = data;
        for (let i = 0; i < data.length; i++) {
          this.todo.push(data[i].nom);
        }
      }
    })
  }

  diagnostique(idVoiture: number): void {
    this.index = idVoiture;
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container.data);
      this.getComposant(event.container.data[0]);

    }
  }

  getComposant(nom: string) {
    for (let i = 0; i < this.listeComposant.length; i++) {
      if (nom === this.listeComposant[i].nom) {
        this.listeComposantReparer.unshift(this.listeComposant[i]);
      };
    }
  }

  deleteComposant(item: Composant) {
    for (let i = 0; i < this.listeComposantReparer.length; i++) {
      if (this.listeComposantReparer[i].nom === item.nom) {
        this.todo.push(item.nom);
        this.listeComposantReparer.splice(i, 1);
      }
    }
  }

  getPiece(event: any, piece: string, composant: string) {
    if (event.target.checked) {
      let count = 0;
      let temp: Composant = {
        nom: composant,
        pieces: []
      };
      temp.pieces.push(piece);
      for (let j = 0; j < this.composantDiagnostique.length; j++) {
        count++;
        if (this.composantDiagnostique[j].nom === composant) {
          this.composantDiagnostique[j].pieces.push(piece);
          count--;
        }
      }
      if (count == this.composantDiagnostique.length) this.composantDiagnostique.push(temp);
    }
    else {
      console.log("Uncheked");
    }
    console.log(this.composantDiagnostique);
  }
}
