import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hero, IHero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css'],
})
export class NewHeroComponent implements OnInit {
  hero: IHero;
  @ViewChild('hid') hidInput: ElementRef;
  @ViewChild('hname') hnameInput: ElementRef;
  @ViewChild('minvalue') minInput: ElementRef;
  @ViewChild('maxvalue') maxInput: ElementRef;
  @ViewChild('uses') usesInput: ElementRef;

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {}

  clickHero() {
    let hid = this.hidInput.nativeElement.value;
    let hname = this.hnameInput.nativeElement.value;
    let minvalue = this.minInput.nativeElement.value;
    let maxvalue = this.maxInput.nativeElement.value;
    let uses = this.usesInput.nativeElement.value;

    this.hero = {
      hid: Number(hid),
      hname: hname,
      minvalue: Number(minvalue),
      maxvalue: Number(maxvalue),
      uses: Number(uses),
    };
    this._heroService
      .PostHero(this.hero)
      .subscribe((res) => console.log('Success', res));
  }
}
