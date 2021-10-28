import { Component, Input, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/Hero';
import { Villain } from 'src/app/models/Villain';
import { GameService } from 'src/app/services/game.service';
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
  damage: number;
  heroSelected: Hero;
  villainSelected: Villain;
  heroesDead: number = 0;
  villainsDead: number = 0;

  constructor(
    private _villainService: VillainService,
    private _heroesService: HeroService
  ) {}

  ngOnInit() {
    this._villainService.GetVillain().subscribe((villain) => {
      this.villainList = villain;
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

  Fight(): void {
    // const btn: HTMLElement = <HTMLElement>document.getElementById('fight');
    // function that uses selectedHero's uses and decrrases by 1 whenever function is called
    if (this.heroSelected != null && this.villainSelected != null) {
      // btn.setAttribute('disabled', 'null');
      // var randNum = this.hero.diceRoll();
      // var randNum = this.heroSelected.diceRoll();
      var randNum =
        Math.floor(
          Math.random() * this.heroSelected.maxvalue -
            this.heroSelected.minvalue
        ) + this.heroSelected.minvalue;
      if (randNum < this.villainSelected.hitPoints) {
        this.villainSelected.hitPoints -= randNum;
      } else if (randNum > this.villainSelected.hitPoints) {
        alert('Critical HIT !.. Villain Down !');
        this.villainSelected.hitPoints = 0;
      }
      if (this.heroSelected.uses > 0) {
        this.heroSelected.uses--;
      } else if (this.heroSelected.uses <= 0) {
        // btn.setAttribute('disabled', 'true');
        this.heroSelected.uses = 0;
      }
      this.damage = randNum;
      // console.log(this.heroSelected.uses);
      // console.log(this.villainSelected.hitPoints);
      // console.log(randNum);
    }
    this.WinCheck();
  }

  WinCheck() {
    this.heroesDead = 0;
    this.villainsDead = 0;
    if (this.heroList != null) {
      for (let i = 0; i < this.heroList.length; i++) {
        if (this.heroList[i].uses <= 0) {
          this.heroesDead++;
        }
        if (this.heroesDead === this.heroList.length) {
          alert('Villains Win!');
        }
      }
    }
    if (this.villainList != null) {
      for (let i = 0; i < this.villainList.length; i++) {
        if (this.villainList[i].hitPoints <= 0) {
          this.villainsDead++;
        }
        if (this.villainsDead === this.villainList.length) {
          alert('Heroes Win!');
        }
      }
    }
    if (
      this.villainsDead === this.villainList.length &&
      this.heroesDead === this.heroList.length
    ) {
      alert('Heroes Win!');
    }
  }
}
