import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IVillain } from 'src/app/models/Villain';
import { VillainService } from 'src/app/services/villain.service';

@Component({
  selector: 'app-new-villain',
  templateUrl: './new-villain.component.html',
  styleUrls: ['./new-villain.component.css'],
})
export class NewVillainComponent implements OnInit {
  villain: IVillain;
  @ViewChild('villainID') villainIDInput: ElementRef;
  @ViewChild('vName') vNameInput: ElementRef;
  @ViewChild('hitPoints') hitPointsInput: ElementRef;

  constructor(private _villainService: VillainService) {}

  ngOnInit(): void {}

  clickVillain() {
    let villainID = this.villainIDInput.nativeElement.value;
    let vName = this.vNameInput.nativeElement.value;
    let hitPoints = this.hitPointsInput.nativeElement.value;

    if (villainID === '' || vName === '' || hitPoints === '') {
      alert('Please fill all the fields');
      return;
    } else if (villainID != null && vName != null && hitPoints != null) {
      this.villain = {
        villainID: Number(villainID),
        vName: vName,
        hitPoints: Number(hitPoints),
      };
      this._villainService
        .PostVillain(this.villain)
        .subscribe((res) => console.log('Success', res));
    }
  }
}
