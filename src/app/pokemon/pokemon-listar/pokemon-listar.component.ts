import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemons: PokemonDetailDto[] | undefined;
  selected: boolean | undefined;
  pokemonSelected: PokemonDetailDto | undefined;
  pokemonService: any;




  constructor(pokemonService: PokemonService) {
    this.selected = false;
    this.pokemonService = pokemonService;
   }

  OnSelected(pokemon: PokemonDetailDto) {
    this.selected = true;
    this.pokemonSelected = pokemon;
  }
  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
