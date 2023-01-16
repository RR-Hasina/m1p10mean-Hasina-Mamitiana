import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';


@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule
  ]
})
export class FinanceModule { }
