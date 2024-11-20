import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {
  pokemon: PokemonDetailDto | undefined;
  pokemonService: any;
  

  constructor(pokemonService: PokemonService) { 
    this.pokemonService = pokemonService;
  }

  ngOnInit() {
    this.pokemon = this.pokemonService.getPokemon();
  }

}
