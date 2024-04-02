import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <header>
      <nav class="bg-cyan-900 w-full p-5 shadow-md">
        <div class="flex font-bold text-white px-2">
          <div class="w-[62%] flex justify-end">
            <a
              class="hover:text-yellow-400 text-3xl"
              [routerLink]="['/pokedex']"
              routerLinkActive="text-yellow-400"
              [routerLinkActiveOptions]="{ exact: true }"
              >Pokedex</a
            >
          </div>
          <div class="w-1/2 flex justify-end">
            <a class="hover:text-yellow-400">Ajouter +</a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
