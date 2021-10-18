export class Villain {
  villainID: number;
  vName: string;
  hitPoints: number;
  villainselected: boolean;
  villainactive: boolean;
  constructor(
    villainID: number,
    vName: string,
    hitPoints: number,
    villainselected: boolean,
    villainactive: boolean
  ) {
    this.villainID = villainID;
    this.vName = vName;
    this.hitPoints = hitPoints;
    this.villainselected = villainselected;
    this.villainselected = false;
    this.villainactive = villainactive;
  }
}
