import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="h-full bg-slate-900 w-full">
    <app-nav-bar></app-nav-bar>
    <div class="flex justify-center items-center mt-20">
      <h1 class="font-semibold text-5xl text-yellow-400">
        Welcome to your Pokedex
      </h1>
    </div>
  </div> `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
