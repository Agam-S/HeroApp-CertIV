import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';
import { GameComponent } from './components/game/game.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { NewVillainComponent } from './components/new-villain/new-villain.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'allHeroes', component: AllHeroesComponent },
  { path: 'allVillians', component: AllVillainsComponent },
  { path: 'game', component: GameComponent },
  { path: 'addHero', component: NewHeroComponent },
  { path: 'addVillain', component: NewVillainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
