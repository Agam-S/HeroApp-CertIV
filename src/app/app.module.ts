import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';
import { HeroStructureComponent } from './components/hero-structure/hero-structure.component';
import { VillainStructureComponent } from './components/villain-structure/villain-structure.component';
import { GameComponent } from './components/game/game.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavComponent } from './components/nav/nav.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewVillainComponent } from './components/new-villain/new-villain.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHeroesComponent,
    AllVillainsComponent,
    HeroStructureComponent,
    VillainStructureComponent,
    GameComponent,
    MainPageComponent,
    NavComponent,
    NewHeroComponent,
    NewVillainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
