import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { WelkomBerichtComponent } from './welkom-bericht/welkom-bericht.component';
import { WeerComponent } from './weer/weer.component';
import { PersoonComponent } from './persoon/persoon.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultaatComponent,
    WelkomBerichtComponent,
    WeerComponent,
    PersoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
