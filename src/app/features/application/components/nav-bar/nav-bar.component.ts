import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <header>
      <nav class="bg-cyan-900 w-full p-4 shadow-md">
        <div class="flex justify-around font-bold text-white">
          <a
            class="hover:text-yellow-400"
            [routerLink]="['/']"
            routerLinkActive="text-yellow-400"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
          <a
            class="hover:text-yellow-400"
            [routerLink]="['/pokedex']"
            routerLinkActive="text-yellow-400"
            >Pokedex</a
          >
          <a class="hover:text-yellow-400">Ajouter</a>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
