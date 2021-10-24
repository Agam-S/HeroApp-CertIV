export class Villain {
  villainID: number;
  vName: string;
  hitPoints: number;
  currentHP: number;

  constructor(
    villainID: number,
    vName: string,
    hitPoints: number,
    currentHP: number
  ) {
    this.villainID = villainID;
    this.vName = vName;
    this.hitPoints = hitPoints;
    this.currentHP = currentHP;
  }
}
