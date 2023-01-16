import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: "ajout", component: AjoutVoitureComponent },
  {
    path: '',
    component: ClientComponent,
    children: [
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
