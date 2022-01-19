import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavbComponent } from './navb/navb.component';
import { ToDoChildComponent } from './to-do-child/to-do-child.component';
import { ToDoParentComponent } from './to-do-parent/to-do-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FunFactComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    NavbComponent,
    ToDoChildComponent,
    ToDoParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
