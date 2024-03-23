import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="bg-cyan-900 w-full p-4 rounded-full shadow-md">
      <div class="flex justify-around font-bold text-white">
        <a class="hover:text-yellow-400" [routerLink]="['/']">Home</a>
        <a class="hover:text-yellow-400" [routerLink]="['/pokedex']">Pokedex</a>
        <a class="hover:text-yellow-400">Ajouter</a>
      </div>
    </nav>
  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
