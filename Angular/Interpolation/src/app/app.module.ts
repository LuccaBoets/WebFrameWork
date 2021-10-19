import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TellerComponent } from './teller/teller.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { MomentComponent } from './moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TellerComponent,
    RandomNumberComponent,
    MomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
