import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginAtelierComponent } from './pages/login-atelier/login-atelier.component';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { LoginFinanceComponent } from './pages/login-finance/login-finance.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: "login-client", component: LoginClientComponent,title:'Login client' },
  { path: "login-atelier", component: LoginAtelierComponent,title:'Login atelier' },
  { path: "login-finance", component: LoginFinanceComponent,title:'Login finance' },
  { path: "confirm/:confirmationCode", component: WelcomeComponent,title:'Confirmation Code' },
  { path: "inscription", component: InscriptionComponent,title:'Inscription' },
  { path: "", redirectTo: "/login-client", pathMatch: "full" },
  {
    path: "client",
    loadChildren: () => import('./profiles/client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard],
    data: {
      role: 'client'
    }
  },
  {
    path: "finance",
    loadChildren: () => import('./profiles/finance/finance.module').then(m => m.FinanceModule),
    canActivate: [AuthGuard],
    data: {
      role: 'finance'
    }
  },
  {
    path: "atelier",
    loadChildren: () => import('./profiles/atelier/atelier.module').then(m => m.AtelierModule),
    canActivate: [AuthGuard],
    data: {
      role: 'atelier'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
