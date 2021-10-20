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
  }
}
