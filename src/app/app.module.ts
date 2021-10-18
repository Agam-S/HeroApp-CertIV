import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { AllVillainsComponent } from './components/all-villains/all-villains.component';
import { HeroStructureComponent } from './components/hero-structure/hero-structure.component';
import { VillainStructureComponent } from './components/villain-structure/villain-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    AllHeroesComponent,
    AllVillainsComponent,
    HeroStructureComponent,
    VillainStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
