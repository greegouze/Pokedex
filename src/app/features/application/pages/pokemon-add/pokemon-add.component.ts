import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-add',
  template: ` <div class="flex justify-center">
      <h2 class="font-semi-bold text-white text-3xl py-4">
        Ajouter un Pokémon
      </h2>
    </div>
    <app-pokemon-form [isAdding]="true"></app-pokemon-form>`,
  styleUrl: './pokemon-add.component.scss',
})
export class PokemonAddComponent {}
