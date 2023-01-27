import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import { DetailsreparationComponent } from './detailsreparation/detailsreparation.component';
import { DiagnostiqueComponent } from './diagnostique/diagnostique.component';
import { ReparationComponent } from './reparation/reparation.component';

const routes: Routes = [
  {
    path: '',
    component : AtelierComponent,
    children : [
      {
        path: 'reparation',
        component : ReparationComponent,
        title :'Réparations'
      },
      {
        path: 'reparation/:imm',
        component : DetailsreparationComponent,
        title :'Voiture | Reparation'
      },
      {
        path: 'bonsortie',
        component : BonSortieComponent,
        title :'Bon de sortie'
      },
      {
        path: 'diagnostique',
        component :DiagnostiqueComponent,
        title :'Diagnostique'
      },
      {
        path: '',
        redirectTo: 'diagnostique',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
