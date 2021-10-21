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
  UsesLeft: number = 0;
  hpLeft: number = 0;

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
    const combatLog: HTMLElement = <HTMLElement>document.getElementById('log');
    this.hp();
    this.uses();
    if (
      (this.heroSelected != null || this.villainSelected != null) &&
      this.UsesLeft > 0
    ) {
      let damage: number = this.heroSelected.usesOfHero(this.villainSelected);
      combatLog.innerHTML =
        this.heroSelected.hname +
        ' !!! dealt ' +
        damage +
        ' damage to ' +
        this.villainSelected.vName +
        ' !!!';
      this.UsesLeft--;
      this.hpLeft -= damage;
      console.log(damage);
    }
    this.Win();
  }
  hp(): void {
    this.hpLeft = 0;

    for (let v of this.villainList) {
      this.hpLeft += v.hitPoints;
    }
  }
  uses(): void {
    this.UsesLeft = 0;
    for (let h of this.heroList) {
      this.UsesLeft += h.uses;
    }
  }
  Win(): void {
    if (
      (this.UsesLeft > 0 && this.hpLeft <= 0) ||
      (this.UsesLeft == 0 && this.hpLeft <= 0)
    ) {
      alert('Heroes win. Heroes killed the villains');
    } else if (this.UsesLeft <= 0 && this.hpLeft > 0) {
      alert('Villains win. Heroes ran out of turns');
    }
  }
}
