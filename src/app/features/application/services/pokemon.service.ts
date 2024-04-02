import { Injectable } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';
import { Router } from '@angular/router';

@Injectable()
export class PokemonService {
  constructor(private router: Router) {}
  pokemons: PokemonBody[] = [
    {
      id: 1,
      name: 'Bulbizare',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      gradiand:
        'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
      description: 'cool',
      types: ['Plante'],
    },
    {
      id: 2,
      name: 'salamèche',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      gradiand:
        'bg-gradient-to-l from-red-500 from-10% via-orange-500 via-50% to-yellow-500 to-90%',
      description: 'cool',
      types: ['Feu'],
    },
    {
      id: 3,
      name: 'carapuce',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      gradiand:
        'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
      description: 'cool',
      types: ['Eau'],
    },
    {
      id: 4,
      name: 'pikachu',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      gradiand:
        'bg-gradient-to-l from-red-500 from-10% via-orange-500 via-50% to-yellow-500 to-90%',
      description: 'cool',
      types: ['Electrik'],
    },
  ];

  getAllPokemons(): PokemonBody[] {
    return this.pokemons;
  }

  getPokemonById(pokemonId: number | string): PokemonBody {
    const pokemon = this.pokemons.find(pokemon => pokemon.id == pokemonId);

    if (!pokemon) {
      throw new Error('Pokemon not found');
    } else {
      return pokemon;
    }
  }

  onViewPokemon(value: number) {
    const target = this.getPokemonById(value);
    console.log(target);
    this.router.navigateByUrl(`pokedex/${target.id}`);
  }

  getPokemonListType(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Electrik'];
  }
}
