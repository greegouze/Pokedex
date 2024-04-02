import { Component, Input, OnInit } from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  template: `<div class="h-full w-full flex justify-center p-8">
    <form action="" class="h-[500px] w-[700px] bg-red-700 rounded-md"></form>
  </div> `,
  styleUrl: './pokemon-form.component.scss',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: PokemonBody;
  types!: string[];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonListType();

    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) this.pokemon = this.pokemonService.getPokemonById(pokemonId);
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    //1 Vérifier si ma case est coché
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    //2 Si coché je push le nouveau type à mon pokemon
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('Ok !');
  }
}
