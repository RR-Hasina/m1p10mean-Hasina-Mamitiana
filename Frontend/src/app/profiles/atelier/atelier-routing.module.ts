import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './atelier.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import { DetailsreparationComponent } from './detailsreparation/detailsreparation.component';
import { ReparationComponent } from './reparation/reparation.component';

const routes: Routes = [
  {
    path: '',
    component : AtelierComponent,
    children : [
      {
        path: 'reparation',
        component : ReparationComponent
      },
      {
        path: 'reparation/:imm',
        component : DetailsreparationComponent
      },
      {
        path: 'bonsortie',
        component : BonSortieComponent
      },
      {
        path: '',
        redirectTo: 'reparation',
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
