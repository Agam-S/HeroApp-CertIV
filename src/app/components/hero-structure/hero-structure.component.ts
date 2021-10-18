import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-hero-structure',
  templateUrl: './hero-structure.component.html',
  styleUrls: ['./hero-structure.component.css'],
})
export class HeroStructureComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}
