import { Component, OnInit } from '@angular/core';
import { PokemonDBService } from '../pokemon-db.service';
import { IPokemon } from '../IPokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemon[] = [];
  
  constructor(private pokemonDB: PokemonDBService) { }

  ngOnInit(): void {
    this.pokemonDB.getAllPokemon().subscribe((pokemons) => {
      pokemons.forEach(pokemon => {
        console.log(pokemon);
        this.pokemons.push(pokemon);
      })
   });
  }

}