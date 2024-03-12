import { Component } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div class="flex justify-center h-full w-full items-center">
      <div
        class="flex flex-col h-80 w-52 rounded-lg p-3 items-center shadow-lg"
        [ngClass]="{ 'bg-emerald-600': pokemon.color === 'green' }"
        *ngFor="let pokemon of pokemons">
        <div class="my-3 text-white font-semibold text-xl">
          <h2>{{ pokemon.name | uppercase }}</h2>
        </div>
        <div
          class="mt-2 p-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-44 w-36 flex items-center rounded-xl shadow-lg">
          <img
            class="h-28 w-28"
            [src]="pokemon.imageSrc"
            [alt]="pokemon.name" />
        </div>
      </div>
    </div>
  `,
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  pokemons: PokemonBody[] = [
    {
      id: 1,
      name: 'Bulbizare',
      imageSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      color: 'green',
    },
  ];

  constructor() {}
}
