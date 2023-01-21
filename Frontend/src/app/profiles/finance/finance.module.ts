import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { StatistiqueComponent } from './statistique/statistique.component';
import { DepenseComponent } from './depense/depense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayementComponent } from './payement/payement.component';


@NgModule({
  declarations: [
    FinanceComponent,
    StatistiqueComponent,
    DepenseComponent,
    PayementComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FinanceModule { }
