import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { LoginAtelierComponent } from './components/login-atelier/login-atelier.component';
import { LoginFinanceComponent } from './components/login-finance/login-finance.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { FormsModule } from '@angular/forms';
import { TestaComponent } from './components/testa/testa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    LoginAtelierComponent,
    LoginFinanceComponent,
    TestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
