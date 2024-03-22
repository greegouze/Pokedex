import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="h-screen w-screen">
      <app-home></app-home>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pokedex';
}
