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
      { path: "home", component: StatistiqueComponent },
      { path: "depense", component: DepenseComponent },
      { path: "payement", component: PayementComponent },      {
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
