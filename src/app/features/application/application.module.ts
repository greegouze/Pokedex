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
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pages/pokemon-form/pokemon-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ApplicationRouterModule],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    PokemonFormComponent,
    TypePipe,
  ],
  providers: [PokemonService],
})
export class ApplicationModule {}
