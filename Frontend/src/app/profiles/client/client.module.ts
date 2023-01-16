import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ClientComponent } from './client.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule
  ]
})
export class ClientModule { }
