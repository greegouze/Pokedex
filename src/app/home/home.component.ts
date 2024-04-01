import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonBody } from '../models/pokemon.model';

@Component({
  selector: 'app-home',
  template: `
    <div class="flex flex-col h-full text-center items-center gap-8">
      <div class="p-11">
        <h1 class="font-semibold text-5xl text-yellow-400">
          Welcome to your Pokedex
        </h1>
      </div>
      <input
        #input
        (keyup.enter)="selectedPokemon(input.value)"
        class="w-[70%] rounded-md ring-2 ring-amber-300"
        placeholder="yolo"
        max="5"
        type="number" />
      <div class="flex w-full justify-center" *ngIf="pokemonSelected">
        <app-pokemon-card [pokemon]="pokemonSelected"></app-pokemon-card>
      </div>
      <div class="flex w-full justify-center" *ngIf="!pokemonSelected">
        <p>Aucun Résultat</p>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public pokemonServices: PokemonService) {}

  pokemons!: PokemonBody[];
  pokemonSelected!: PokemonBody;

  ngOnInit(): void {
    this.pokemons = this.pokemonServices.getAllPokemons();
  }

  selectedPokemon(pokemonId: string) {
    const pokemons: PokemonBody =
      this.pokemonServices.getPokemonById(pokemonId);
    if (pokemons) {
      console.log(`vous  avez cliqué sur ${pokemons.name}`);
      this.pokemonSelected = pokemons;
    } else {
      this.pokemonSelected = pokemons;
    }
  }
}
