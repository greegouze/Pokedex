import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './pages/app/app.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonEditComponent } from './pages/pokemon-edit/pokemon-edit.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PokemonListComponent,
      },
      {
        path: 'pokedex/:id',
        component: PokemonDetailsComponent,
      },
      {
        path: 'pokedex/:id/edit',
        component: PokemonEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ApplicationRouterModule {}
