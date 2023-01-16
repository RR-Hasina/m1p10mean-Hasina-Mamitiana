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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './components/client/client.component';
import { AtelierComponent } from './components/atelier/atelier.component';
import { FinanceComponent } from './components/finance/finance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    LoginAtelierComponent,
    LoginFinanceComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    ClientComponent,
    AtelierComponent,
    FinanceComponent,
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
