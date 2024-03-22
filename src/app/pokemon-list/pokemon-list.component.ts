import { Component, OnInit } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div class="h-full w-full bg-slate-900 flex flex-col gap-6 items-center">
      <div class="w-full flex justify-center p-5">
        <h1
          class="font-black text-5xl text-orange-300 [text-shadow:_0_7px_0_rgb(0_0_0_/_40%)]">
          Pokémon
        </h1>
      </div>
      <div
        class="flex h-full w-[80%] max-w-[910px] p-2 gap-5 justify-center overflow-auto flex-wrap">
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
