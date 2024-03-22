import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="bg-cyan-900 sticky top-0 w-full p-4 rounded-full">
      <div class="flex justify-around font-bold text-white">
        <p>Home</p>
        <p>Pokedex</p>
        <p>Ajouter</p>
      </div>
    </nav>
  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
