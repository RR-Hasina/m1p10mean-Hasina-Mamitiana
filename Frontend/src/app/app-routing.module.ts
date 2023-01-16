import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAtelierComponent } from './pages/login-atelier/login-atelier.component';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { LoginFinanceComponent } from './pages/login-finance/login-finance.component';

const routes: Routes = [
{path:"login-client",component:LoginClientComponent},
{path:"login-atelier",component:LoginAtelierComponent},
{path:"login-finance",component:LoginFinanceComponent},
{path:"", redirectTo:"/login-client", pathMatch:"full"},
{path:"client",
loadChildren: () => import('./profiles/client/client.module').then(m => m.ClientModule)
},
{path:"finance",
loadChildren: () => import('./profiles/finance/finance.module').then(m => m.FinanceModule)},
{path:"atelier",
loadChildren: () => import('./profiles/atelier/atelier.module').then(m => m.AtelierModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
