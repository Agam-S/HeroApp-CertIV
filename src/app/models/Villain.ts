export class Villain {
  villainID: number;
  vName: string;
  hitPoints: number;

  constructor(villainID: number, vName: string, hitPoints: number) {
    this.villainID = villainID;
    this.vName = vName;
    this.hitPoints = hitPoints;
  }
}
