import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WelkomComponent } from './welkom/welkom.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    WelkomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Welkom', component: WelkomComponent },
      { path: 'to-do', component: ToDoComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
