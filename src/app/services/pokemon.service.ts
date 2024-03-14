import { Injectable } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: PokemonBody[] = [
    {
      id: 1,
      name: 'Bulbizare',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      backGround: '#059669',
      gradiand:
        'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
    },
    {
      id: 2,
      name: 'salamèche',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      backGround: '#E11D48',
      gradiand:
        'bg-gradient-to-l from-red-500 from-10% via-orange-500 via-50% to-yellow-500 to-90%',
    },
    {
      id: 3,
      name: 'carapuce',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      backGround: '#59C3FF',
      gradiand:
        'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
    },
    {
      id: 4,
      name: 'pikachu',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      backGround: '#FAD616',
      gradiand:
        'bg-gradient-to-l from-red-500 from-10% via-orange-500 via-50% to-yellow-500 to-90%',
    },
  ];

  getAllPokemons(): PokemonBody[] {
    return this.pokemons;
  }
}
