import { Component, Input, OnInit } from '@angular/core';
import { Villain } from 'src/app/models/Villain';
import { HeroService } from 'src/app/services/hero.service';
import { VillainService } from 'src/app/services/villain.service';

@Component({
  selector: 'app-all-villains',
  templateUrl: './all-villains.component.html',
  styleUrls: ['./all-villains.component.css'],
})
export class AllVillainsComponent implements OnInit {
  villainList: Villain[];
  constructor(private _villainService: VillainService) {}

  ngOnInit() {
    this._villainService.GetVillain().subscribe((villain) => {
      this.villainList = villain;
      console.log(this.villainList);
    });
  }
}
