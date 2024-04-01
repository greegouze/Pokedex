import { NgModule } from '@angular/core';
import { AppComponent } from './pages/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationRouterModule } from './application-router.module';

@NgModule({
  imports: [CommonModule, RouterModule, ApplicationRouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PokemonCardComponent,
    PokemonListComponent,
  ],
  providers: [],
})
export class ApplicationModule {}
