import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="h-screen w-full">
      <app-pokemon-list></app-pokemon-list>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pokedex';
}
