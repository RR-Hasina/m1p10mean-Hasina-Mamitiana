import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginAtelierComponent } from './pages/login-atelier/login-atelier.component';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { LoginFinanceComponent } from './pages/login-finance/login-finance.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: "login-client", component: LoginClientComponent },
  { path: "login-atelier", component: LoginAtelierComponent },
  { path: "login-finance", component: LoginFinanceComponent },
  { path: "confirm/:confirmationCode", component: WelcomeComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "", redirectTo: "/login-client", pathMatch: "full" },
  {
    path: "client",
    loadChildren: () => import('./profiles/client/client.module').then(m => m.ClientModule)
  },
  {
    path: "finance",
    loadChildren: () => import('./profiles/finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: "atelier",
    loadChildren: () => import('./profiles/atelier/atelier.module').then(m => m.AtelierModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
