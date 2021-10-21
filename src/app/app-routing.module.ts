import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';
import { GameComponent } from './components/game/game.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'allHeroes', component: AllHeroesComponent },
  { path: 'allVillians', component: AllVillainsComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
