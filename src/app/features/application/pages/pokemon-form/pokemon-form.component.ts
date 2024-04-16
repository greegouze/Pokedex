import {
  ChangeDetectorRef,
  AfterContentChecked,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PokemonBody } from '../../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-form',
  template: `<div class="h-full w-full flex justify-center p-8">
    <form
      #formEdit="ngForm"
      [formGroup]="pokemonFormEdit"
      (ngSubmit)="onSubmit()"
      *ngIf="this.pokemon"
      class="h-[500px] w-[700px] p-3 rounded-md bg-slate-700">
      <div class="flex h-full w-full p-2">
        <div
          class="h-full w-1/2 p-4 border-2 rounded-md shadow-lg"
          [style.backgroundColor]="pokemon.types[0] | type">
          <p>Form submitted ? {{ formEdit.submitted }}</p>
          <p>Form valid ? {{ formEdit.valid }}</p>
          <p>Form invalid ? {{ formEdit.invalid }}</p>
          <img [src]="pokemon.imageSrc" class="h-64" alt="" />
        </div>

        <div class="h-full w-1/2 p-4 flex flex-col gap-6">
          <fieldset class="flex flex-col gap-2">
            <label class="text-white" for="name">Name : </label>
            <input id="name" type="text" formControlName="name" />

            <div
              class="text-rose-200"
              *ngIf="pokemonFormEdit.controls['name'].errors">
              <span
                *ngIf="pokemonFormEdit.controls['name'].errors?.['required']"
                >Ce champs est obligatoire *</span
              >
              <span
                *ngIf="pokemonFormEdit.controls['name'].errors?.['maxlength']"
                >Le nom doit contenir 15 caractères maximum *</span
              >
            </div>
          </fieldset>

          <fieldset class="flex flex-col">
            <label class="text-white" for="">Description : </label>
            <textarea
              class="resize-none"
              formControlName="description"></textarea>

            <div
              class="text-rose-200"
              *ngIf="pokemonFormEdit.controls['description'].errors">
              <span
                *ngIf="
                  pokemonFormEdit.controls['description'].errors?.['required']
                "
                >Ce champs est obligatoire *</span
              >
              <span
                *ngIf="
                  pokemonFormEdit.controls['description'].errors?.['maxlength']
                "
                >La description est trop longue *</span
              >
            </div>
          </fieldset>

          <fieldset formArrayName="types" class="h-full w-full">
            <div
              class="max-h-15 w-full py-2 bg-slate-500 overflow-auto flex gap-2 flex-wrap justify-center">
              <div
                *ngFor="let type of types; let i = index"
                class="border-2 px-2 rounded-md text-white hover:scale-105 duration-200"
                [style.backgroundColor]="type | type"
                [class.opacity-50]="checkbox?.checked">
                <input
                  #checkbox
                  class="hidden"
                  type="checkbox"
                  id="{{ type }}"
                  [value]="type"
                  [checked]="hasType(type)"
                  (change)="selectType($event, type)" />
                <label for="{{ type }}">{{ type }}</label>
              </div>
            </div>

            <div
              class="text-rose-200"
              *ngIf="pokemonFormEdit.controls['types'].errors">
              <span
                *ngIf="pokemonFormEdit.controls['types'].errors?.['required']"
                >Ce champs est obligatoire *</span
              >
            </div>
          </fieldset>

          <div class="flex gap-6 justify-center">
            <button class="ring-2 rounded-sm py-1 px-2 text-white w-full">
              Retour
            </button>
            <button
              [disabled]="!formEdit.valid"
              type="submit"
              class="ring-2 rounded-sm py-1 px-2 text-white w-full disabled:opacity-50">
              Valider
            </button>
          </div>
        </div>
      </div>
    </form>
  </div> `,
  styleUrl: './pokemon-form.component.scss',
})
export class PokemonFormComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  @Input() pokemon!: PokemonBody;
  pokemonFormEdit!: FormGroup;
  types!: string[];

  constructor(
    private route: ActivatedRoute,
    protected pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {}

  private destroy = new Subject<void>();
  private destroy$ = this.destroy.asObservable();

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonListType();

    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) this.pokemon = this.pokemonService.getPokemonById(pokemonId);

    this.pokemonFormEdit = this.formBuilder.group({
      name: [
        this.pokemon.name,
        [Validators.required, Validators.maxLength(15)],
      ],
      description: [
        this.pokemon.description,
        [Validators.required, Validators.maxLength(255)],
      ],
      types: [
        this.formBuilder.array(
          this.pokemon.types.map(type => this.formBuilder.control(type))
        ),
        Validators.required,
      ],
    });

    this.pokemonFormEdit
      .get('name')
      ?.valueChanges.pipe(
        tap(value => {
          this.pokemon.name = value;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
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
    console.log(this.pokemonFormEdit.value);
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
