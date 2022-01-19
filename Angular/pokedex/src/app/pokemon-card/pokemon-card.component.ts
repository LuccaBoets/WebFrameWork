import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../IPokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input("pokemon") pokemon: IPokemon = {} as IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
