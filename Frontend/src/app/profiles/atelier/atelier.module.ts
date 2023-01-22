import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierComponent } from './atelier.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { TopbarModule } from 'src/app/components/topbar/topbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { DiagnostiqueComponent } from './diagnostique/diagnostique.component';
import { ReparationComponent } from './reparation/reparation.component';


@NgModule({
  declarations: [
    AtelierComponent,
    DiagnostiqueComponent,
    ReparationComponent
  ],
  imports: [
    CommonModule,
    AtelierRoutingModule,
    SidebarModule,
    TopbarModule,
    FooterModule,
    DragDropModule
  ]
})
export class AtelierModule { }
