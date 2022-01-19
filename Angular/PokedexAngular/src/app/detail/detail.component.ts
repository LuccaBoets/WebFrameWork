import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/types';
import json from '../../assets/pokedex.json';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  id: number = 0;

  constructor(private route: ActivatedRoute, private pokedex: PokedexService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get("id") != null) {
        this.id = parseInt(params.get("id")!);
        
      }
    })
  }

  get pokemon() : Pokemon | undefined {
    return this.pokedex.getPokemonById(this.id);
  }

}
