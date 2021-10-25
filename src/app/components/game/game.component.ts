import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
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
  gameList: Game[];
  // hero: Hero;
  damage: number;
  heroSelected: Hero;
  villainSelected: Villain;

  constructor(
    private _villainService: VillainService,
    private _heroesService: HeroService,
    private _allGamesService: GameService
  ) {}

  ngOnInit() {
    this._villainService.GetVillain().subscribe((villain) => {
      this.villainList = villain;
    });
    this._heroesService.GetHero().subscribe((hero) => {
      this.heroList = hero;
    });
    this._allGamesService.GetGames().subscribe((game) => {
      this.gameList = game;
      console.log(this.gameList);
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

  
  WinWin() {
    this.heroList.forEach(Hero) {
      if (Hero.uses <= 0) {
        alert('Villains Win!');
      }
    }
  }

  // WinCheck() {
  //   if (this.heroList != null) {
  //     for (let i = 0; i < this.heroList.length; i++) {
  //       if (this.heroList[i].uses <= 0) {
  //         alert('Villains Win!');
  //       }
  //     }
  //   } else if (this.villainList != null) {
  //     for (let i = 0; i < this.villainList.length; i++) {
  //       if (this.villainList[i].hitPoints <= 0) {
  //         console.log('Heroes Win!');
  //       }
  //     }
  //   }
  // }

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
      console.log(this.heroSelected.uses);
      console.log(this.villainSelected.hitPoints);
      console.log(randNum);
      // this.WinCheck();
    }
  }
}
