import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAtelierComponent } from './components/login-atelier/login-atelier.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginFinanceComponent } from './components/login-finance/login-finance.component';
import { TestaComponent } from './components/testa/testa.component';

const routes: Routes = [
{path:"login-client",component:LoginClientComponent},
{path:"login-atelier",component:LoginAtelierComponent},
{path:"login-finance",component:LoginFinanceComponent},
{path:"", redirectTo:"/login-client", pathMatch:"full"},
{path:"client",component:TestaComponent,
children:[

]
},
{path:"atelier",component:TestaComponent,
children:[

]
},
{path:"finance",component:TestaComponent,
children:[

]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
