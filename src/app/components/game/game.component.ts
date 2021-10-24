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
  hero: Hero;
  heroSelected: Hero;
  villainSelected: Villain;

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

  Fight(): void {
    // const btn: HTMLElement = <HTMLElement>document.getElementById('fight');
    // function that uses selectedHero's uses and decrrases by 1 whenever function is called
    if (this.heroSelected != null && this.villainSelected != null) {
      // btn.setAttribute('disabled', 'null');
      // var randNum = this.hero.diceRoll();
      // var randNum = this.heroSelected.diceRoll();
      var randNum = Math.floor(Math.random() * 5 - 0) + 0;
      if (randNum < this.villainSelected.hitPoints) {
        this.villainSelected.hitPoints -= randNum;
      } else if (randNum > this.villainSelected.hitPoints) {
        alert('damage op af');
        this.villainSelected.hitPoints = 0;
      }
      if (this.heroSelected.uses > 0) {
        this.heroSelected.uses--;
      } else if (this.heroSelected.uses <= 0) {
        // btn.setAttribute('disabled', 'true');
        this.heroSelected.uses = 0;
      }
      console.log(this.heroSelected.uses);
      console.log(this.villainSelected.hitPoints);
      console.log(randNum);
      // this.win();
    }
  }
  // win(): void {
  // ------> function that iterates through the villainList and checks if all the hitPoints are 0, then the Heroes Win. <------
  //   if (this.villainList != null) {
  //     for (let i = 0; i < this.villainList.length; i++) {
  //       if (this.villainList[i].hitPoints <= 0) {
  //         alert('Heroes Win!');
  //       }
  //     }
  //   } else if (this.heroList != null) {
  //     for (let i = 0; i < this.heroList.length; i++) {
  //       if (this.heroList[i].uses <= 0) {
  //         console.log('Villains Win!');
  //       }
  //     }
  //   }
  // }
}
