export class Villain {
  villainID: number;
  vName: string;
  hitPoints: number;
  currentHP: number;

  constructor(villainID: number, vName: string, hitPoints: number) {
    this.villainID = villainID;
    this.vName = vName;
    this.hitPoints = hitPoints;
    this.currentHP = hitPoints;
  }
  damageTaken(damage: number): void {
    this.currentHP -= damage;
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
  }
}
