import { Component, Input, OnInit } from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  template: `<div class="h-full w-full flex justify-center p-8">
    <div>
      <button (click)="goBack()">Retour</button>
    </div>
    <app-pokemon-card [pokemon]="pokemon"></app-pokemon-card>
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.pokemon = this.pokemonService.getPokemonById(id);
  }

  goBack() {
    this.router.navigate(['/pokedex']);
  }
}
