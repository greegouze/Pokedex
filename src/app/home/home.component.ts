import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="flex h-32 justify-center items-center text-center bg-slate-400">
      <h1 class="font-semibold text-5xl text-yellow-400">
        Welcome to your Pokedex
      </h1>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
