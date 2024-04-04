import { Component, Input, OnInit } from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  template: `<div class="h-full w-full flex justify-center p-8">
    <form
      #formEdit="ngForm"
      [formGroup]="pokemonFormEdit"
      (ngSubmit)="onSubmit()"
      class="h-[500px] w-[700px] p-3 rounded-md bg-slate-700">
      <div class="flex h-full w-full p-2">
        <div class="h-full w-1/2 p-4 border-2 rounded-md shadow-lg">
          <p>Form submitted ? {{ formEdit.submitted }}</p>
          <p>Form valid ? {{ formEdit.valid }}</p>
          <p>Form invalid ? {{ formEdit.invalid }}</p>
          <img [src]="pokemon.imageSrc" class="h-64" alt="" />
        </div>

        <div class="h-full w-1/2 p-4 flex flex-col gap-6">
          <fieldset class="flex flex-col gap-2">
            <label for="name">Name : </label>
            <input type="text" formControlName="name" />
            <div
              class="text-rose-700"
              *ngIf="pokemonFormEdit.controls.name.errors">
              <span *ngIf="pokemonFormEdit.controls.name.errors?.['required']"
                >Ce champs est obligatoire *</span
              >
            </div>
          </fieldset>

          <fieldset class="flex flex-col">
            <label for="">Description : </label>
            <input type="text" formControlName="description" />
          </fieldset>

          <fieldset class="flex flex-col">
            <label for=""> Type : </label>
            <select name="" id="" formControlName="types">
              <option
                [style.color]="pokemonType | type"
                *ngFor="let pokemonType of pokemonService.getPokemonListType()"
                value="{{ pokemonType }}">
                {{ pokemonType }}
              </option>
            </select>
          </fieldset>

          <div class="flex gap-6">
            <button class="ring-2 rounded-sm py-1 px-2 text-white">
              Retour
            </button>
            <button
              type="submit"
              class="ring-2 rounded-sm py-1 px-2 text-white">
              Valider
            </button>
          </div>
        </div>
      </div>
    </form>
  </div> `,
  styleUrl: './pokemon-form.component.scss',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: PokemonBody;
  types!: string[];

  constructor(
    private route: ActivatedRoute,
    protected pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  pokemonFormEdit = this.formBuilder.group({
    name: ['', Validators.required],
    description: '',
    types: '',
  });

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
    console.log('Ok !', this.pokemonFormEdit.value);
  }
}
