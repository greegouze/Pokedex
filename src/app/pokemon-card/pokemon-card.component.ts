import { Component, Input } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  template: `
    <div
      class="flex flex-col h-80 w-52 rounded-lg p-3 items-center shadow-lg"
      [style.backgroundColor]="pokemon.backGround">
      <div class="my-3 text-white font-semibold text-xl">
        <h2>{{ pokemon.name | uppercase }}</h2>
      </div>
      <!-- <div
      class="mt-2 p-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-44 w-36 flex items-center rounded-xl shadow-lg"> -->
      <div
        class="mt-2 p-3 h-44 w-36 flex items-center rounded-xl shadow-lg"
        [ngClass]="pokemon.gradiand">
        <img class="h-28 w-28" [src]="pokemon.imageSrc" [alt]="pokemon.name" />
      </div>
    </div>
  `,
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  constructor(private pokemonService: PokemonService) {}

  @Input() pokemon!: PokemonBody;
}
