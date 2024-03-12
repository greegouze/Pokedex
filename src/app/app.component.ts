import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1 class="text-3xl font-bold underline">Welcome to {{ title }}!</h1>
      <router-outlet />
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pokedex';
}
