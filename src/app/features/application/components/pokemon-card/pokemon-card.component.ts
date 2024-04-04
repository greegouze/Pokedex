import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonBody } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  template: `
    <div
      class="flex flex-col h-80 w-52 rounded-lg p-3 items-center shadow-lg hover:scale-105 duration-200"
      [style.backgroundColor]="pokemon.types[0] | type">
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
      <div class="w-full mt-5  flex justify-center">
        <button
          class="cursor-pointer font-semibold text-white"
          type="button"
          (click)="onViewPokemonEdit(pokemon.id)">
          En savoir plus
        </button>
      </div>
    </div>
  `,
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  constructor(
    public pokemonService: PokemonService,
    private router: Router
  ) {}

  @Input() pokemon!: PokemonBody;

  onViewPokemonEdit(value: number) {
    const target = this.pokemonService.getPokemonById(value);
    console.log(target);
    this.router.navigateByUrl(`pokedex/${target.id}/edit`);
  }
}
