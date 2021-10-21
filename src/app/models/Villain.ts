export class Villain {
  villainID: number;
  vName: string;
  hitPoints: number;

  constructor(villainID: number, vName: string, hitPoints: number) {
    this.villainID = villainID;
    this.vName = vName;
    this.hitPoints = hitPoints;
  }
  damageTaken(damage: number): void {
    this.hitPoints -= damage;
    if (this.hitPoints < 0) {
      this.hitPoints = 0;
    }
  }
}
