import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LocationComponent } from './location/location.component';
import { TellerComponent } from './teller/teller.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocationComponent,
    TellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFWW5JzI3JZv-GbajGGZK9xRkeG-vfPtc'
    }),
    RouterModule.forRoot([
      { path: '', component: MapComponent },
      { path: 'locations', component: MapComponent },
      { path: 'map/:Location', component: LocationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
