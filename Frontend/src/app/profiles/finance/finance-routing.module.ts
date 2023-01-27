import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepenseComponent } from './depense/depense.component';
import { FinanceComponent } from './finance.component';
import { PayementComponent } from './payement/payement.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {
    path: '',
    component : FinanceComponent,
    children : [
      { path: "home", component: StatistiqueComponent,title :'Statistiques' },
      { path: "depense", component: DepenseComponent,title :'Dépense' },
      { path: "payement", component: PayementComponent,title :'Payements' },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
