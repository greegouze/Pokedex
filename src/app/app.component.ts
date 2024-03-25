import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="h-screen w-full bg-slate-800">
      <app-nav-bar></app-nav-bar>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pokedex';
}
