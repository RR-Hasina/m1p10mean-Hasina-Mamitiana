import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginAtelierComponent } from './pages/login-atelier/login-atelier.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { FormsModule } from '@angular/forms';
import { AtelierModule } from './profiles/atelier/atelier.module';
import { ClientModule } from './profiles/client/client.module';
import { FinanceModule } from './profiles/finance/finance.module';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { LoginFinanceComponent } from './pages/login-finance/login-finance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    LoginAtelierComponent,
    LoginFinanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AtelierModule,
    ClientModule,
    FinanceModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
