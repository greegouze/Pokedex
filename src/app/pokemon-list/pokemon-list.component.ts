import { Component, OnInit } from '@angular/core';
import { PokemonBody } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div class="w-full h-full flex flex-col gap-6 items-center">
      <!-- <h1
          class="font-black text-5xl text-orange-300 [text-shadow:_0_7px_0_rgb(0_0_0_/_40%)]">
          Pokémon
        </h1> -->
      <div class="w-full flex justify-center mt-4">
        <img
          class="h-20"
          src="../../assets/images/International_Pokémon_logo 1.svg"
          alt="" />
      </div>

      <div
        class="flex full w-[80%] max-w-[910px] gap-5 justify-center overflow-auto flex-wrap mt-2 p-4">
        <app-pokemon-card
          *ngFor="let pokemon of pokemons"
          [pokemon]="pokemon"></app-pokemon-card>
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
