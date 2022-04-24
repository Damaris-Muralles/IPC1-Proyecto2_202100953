import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreComponent } from './components/nombre/nombre.component';
import { CardindividualComponent } from './components/cardindividual/cardindividual.component';
import { NumeroComponent } from './components/numero/numero.component';
import { CardtipoComponent } from './components/cardtipo/cardtipo.component';
import { TipoComponent } from './components/tipo/tipo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    NombreComponent,
    CardindividualComponent,
    NumeroComponent,
    CardtipoComponent,
    TipoComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
