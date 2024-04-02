import { Component, Input, OnInit } from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  template: `<div class="h-full w-full flex flex-col p-8 gap-8">
    <div class="">
      <button (click)="goBack()" class="ring-2 rounded-sm py-1 px-2 text-white">
        Retour
      </button>
    </div>
    <div class="flex justify-center p-2">
      <app-pokemon-card [pokemon]="pokemon"></app-pokemon-card>
    </div>
  </div>`,
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon!: PokemonBody;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId)
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
