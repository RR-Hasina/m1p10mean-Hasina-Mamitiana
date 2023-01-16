import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AtelierComponent } from './atelier.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    AtelierComponent
  ],
  imports: [
    CommonModule,
    AtelierRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule
  ]
})
export class AtelierModule { }