import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  template: `
    <div class="">
      <app-nav-bar></app-nav-bar>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
