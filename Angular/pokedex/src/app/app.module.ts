import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    PokemonDetailComponent,
    NavbarComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/:id', component: PokemonDetailComponent },
      { path: '**', component: HomeComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
