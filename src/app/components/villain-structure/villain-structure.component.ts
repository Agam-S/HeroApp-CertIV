import { Component, Input, OnInit } from '@angular/core';
import { Villain } from 'src/app/models/Villain';

@Component({
  selector: 'app-villain-structure',
  templateUrl: './villain-structure.component.html',
  styleUrls: ['./villain-structure.component.css'],
})
export class VillainStructureComponent implements OnInit {
  @Input() villain: Villain;
  constructor() {}

  ngOnInit(): void {}
}
