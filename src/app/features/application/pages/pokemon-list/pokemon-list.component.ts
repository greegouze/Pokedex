import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonBody } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div
      class="h-full w-full flex flex-col gap-6 items-center overflow-auto bg-slate-800">
      <div class="w-full flex justify-center mt-4">
        <img
          class="h-20"
          src="../../assets/images/International_Pokémon_logo 1.svg"
          alt="" />
      </div>

      <div
        class=" flex h-[700px] w-[80%] max-w-[910px] gap-5 justify-center overflow-auto flex-wrap mt-2 p-4">
        <app-pokemon-card
          *ngFor="let pokemon of pokemons"
          [pokemon]="pokemon"></app-pokemon-card>
      </div>
    </div>
  `,
})
export class PokemonListComponent implements OnInit {
  pokemons!: PokemonBody[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getAllPokemons();
  }
}
