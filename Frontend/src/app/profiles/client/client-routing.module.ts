import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { ClientComponent } from './client.component';
import { DepotComponent } from './depot/depot.component';
import { ListeVoitureComponent } from './liste-voiture/liste-voiture.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: AjoutVoitureComponent
      },
      {
        path: '',
        component: DepotComponent
      },
      {
        path: '',
        component: ListeVoitureComponent
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
