import { Component, OnInit } from '@angular/core';
import { PokemonDBService } from '../pokemon-db.service';
import { IPokemon } from '../IPokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: IPokemon = {} as IPokemon;

  constructor(private pokemonDB: PokemonDBService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonDB.getPokemon(params['id']).subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
    });
  }
}
