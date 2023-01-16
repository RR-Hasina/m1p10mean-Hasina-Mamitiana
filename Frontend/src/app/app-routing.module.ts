import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './components/atelier/atelier.component';
import { ClientComponent } from './components/client/client.component';
import { FinanceComponent } from './components/finance/finance.component';
import { LoginAtelierComponent } from './components/login-atelier/login-atelier.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginFinanceComponent } from './components/login-finance/login-finance.component';

const routes: Routes = [
{path:"login-client",component:LoginClientComponent},
{path:"login-atelier",component:LoginAtelierComponent},
{path:"login-finance",component:LoginFinanceComponent},
{path:"", redirectTo:"/login-client", pathMatch:"full"},
{path:"client",component:ClientComponent,
children:[

]
},
{path:"atelier",component:AtelierComponent,
children:[

]
},
{path:"finance",component:FinanceComponent,
children:[

]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
