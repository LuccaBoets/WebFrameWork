import { Injectable } from '@angular/core';
import { Pokemon } from 'src/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  private _pokemon: Pokemon[] = [];

  toggleFavourite(pokemon: Pokemon) {
    pokemon.favourite = !pokemon.favourite;
  }

  getPokemonById(id: number) {
    return this.pokemon.find(p => parseInt(p.id) == id);
  }

  get pokemon() {
    return this._pokemon;
  }

  async loadPokemon() {
    let pokemon = await this._http.get<Pokemon[]>("http://localhost:3000/pokemon").toPromise();
    this._pokemon = pokemon;
  }

  constructor(private _http : HttpClient) { 
    this.loadPokemon();
  }

  
}
