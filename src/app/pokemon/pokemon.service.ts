import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number):Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId );
  }

  getPokemonTypeList():string[]{
    return [
      "Plante",
      "Poison",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Vol",
      "Electrik",
      "Fée",
      "Combat",
      "Psy"
    ];
  }
}
