import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="h-screen bg-slate-800">
      <div class="p-4">
        <app-nav-bar></app-nav-bar>
      </div>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pokedex';
}
