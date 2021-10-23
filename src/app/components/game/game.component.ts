import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { Villain } from 'src/app/models/Villain';
import { HeroService } from 'src/app/services/hero.service';
import { VillainService } from 'src/app/services/villain.service';
import { AllHeroesComponent } from '../all-heroes/all-heroes.component';
import { AllVillainsComponent } from '../all-villains/all-villains.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  heroList: Hero[];
  villainList: Villain[];

  heroSelected: Hero;
  villainSelected: Villain;
  UsesLeft: number;
  hpLeft: number;

  constructor(
    private _villainService: VillainService,
    private _heroesService: HeroService
  ) {}

  ngOnInit() {
    this._villainService.GetVillain().subscribe((villain) => {
      this.villainList = villain;
      console.log(this.villainList);
    });
    this._heroesService.GetHero().subscribe((hero) => {
      this.heroList = hero;
    });
    if (this.heroList != null) {
      this.heroSelected = this.heroList[0];
    }

    if (this.villainList != null) {
      this.villainSelected = this.villainList[0];
    }
  }

  Selector(): void {
    const heroSelector: HTMLSelectElement = <HTMLSelectElement>(
      document.getElementById('heroSelector')
    );
    const villainSelector: HTMLSelectElement = <HTMLSelectElement>(
      document.getElementById('villainSelector')
    );
    this.heroSelected = this.heroList[heroSelector.selectedIndex];
    this.villainSelected = this.villainList[villainSelector.selectedIndex];
  }
  // function that uses Hero class's Attack function to deacrese the Villain's hitPoints and usesLeft decreses by 1.
  Fight(): void {
    if (
      (this.heroSelected != null || this.villainSelected != null) &&
      this.UsesLeft > 0
    ) {
      let diceRoll: number = this.heroSelected.diceRoll();
      this.UsesLeft = this.heroSelected.uses - 1;
      this.hpLeft = this.villainSelected.currentHP - diceRoll;
      console.log(this.UsesLeft);
      console.log(this.hpLeft);
    }
  }
}
