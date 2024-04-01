import { NgModule } from '@angular/core';
import { AppComponent } from './pages/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationRouterModule } from './application-router.module';
import { TypePipe } from './pipes/types.pipe';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

@NgModule({
  imports: [CommonModule, RouterModule, ApplicationRouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    TypePipe,
  ],
  providers: [],
})
export class ApplicationModule {}
