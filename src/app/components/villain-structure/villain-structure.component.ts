import { Component, Input, OnInit } from '@angular/core';
import { Villain } from 'src/app/models/Villain';
import { VillainService } from 'src/app/services/villain.service';

@Component({
  selector: 'app-villain-structure',
  templateUrl: './villain-structure.component.html',
  styleUrls: ['./villain-structure.component.css'],
})
export class VillainStructureComponent implements OnInit {
  @Input() villain: Villain;
  constructor(private _villainService: VillainService) {}

  ngOnInit(): void {}

  deleteVillain(villainID: number) {
    if (confirm('Are you sure you want to delete this Villain?')) {
      this._villainService
        .DeleteVillain(villainID)
        .subscribe((res) => console.log('Success', res));
    }
  }
}
