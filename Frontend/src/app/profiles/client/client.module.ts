import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ClientComponent } from './client.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { FormsModule } from '@angular/forms';
import { DepotComponent } from './depot/depot.component';

@NgModule({
  declarations: [
    ClientComponent,
    AjoutVoitureComponent,
    DepotComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule,
    FormsModule
  ]
})
export class ClientModule { }