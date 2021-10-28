import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-structure',
  templateUrl: './hero-structure.component.html',
  styleUrls: ['./hero-structure.component.css'],
})
export class HeroStructureComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {}

  deleteHero(hid: number) {
    if (confirm('Are you sure you want to delete this Hero?')) {
      this._heroService
        .DeleteHero(hid)
        .subscribe((res) => console.log('Success', res));
    }
  }
}
