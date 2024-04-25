import { Component, OnInit } from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  template: `
    <div *ngIf="pokemon">
      <div class="flex justify-center">
        <h2 class="font-semi-bold text-white text-3xl py-4">
          Editer {{ pokemon.name }}
        </h2>
      </div>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
  `,
  styleUrl: './pokemon-edit.component.scss',
})
export class PokemonEditComponent implements OnInit {
  pokemon!: PokemonBody | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
