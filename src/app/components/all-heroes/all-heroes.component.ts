import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css'],
})
export class AllHeroesComponent implements OnInit {
  heroList: Hero[];

  constructor(private _heroesService: HeroService) {}

  ngOnInit() {
    this._heroesService.GetHero().subscribe((heroes) => {
      this.heroList = heroes;
      console.log(this.heroList);
    });
  }
}
