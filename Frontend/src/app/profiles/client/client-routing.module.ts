import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { ClientComponent } from './client.component';
import { DepotComponent } from './depot/depot.component';
import { DetailshistoriqueComponent } from './detailshistorique/detailshistorique.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ListeVoitureComponent } from './liste-voiture/liste-voiture.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'ajout',
        component: AjoutVoitureComponent
      },
      {
        path: 'depot',
        component: DepotComponent
      },
      {
        path: 'liste',
        component: ListeVoitureComponent
      },
      {
        path: 'voiture',
        component: VoitureComponent
      },
      {
        path: 'voiture/:imm/historique',
        component: HistoriqueComponent
      },
      {
        path: 'voiture/:imm/historique/:date',
        component: DetailshistoriqueComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
