import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './IPokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDBService {

  private apiUrl : string = 'http://localhost:3000/Pokemons';

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get<IPokemon>(this.apiUrl+"/"+id);
  }

  getAllPokemon() : Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this.apiUrl);
  }
}
