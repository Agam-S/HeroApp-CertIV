import { Villain } from './Villain';

export interface IHero {
  hid: number;
  hname: string;
  minvalue: number;
  maxvalue: number;
  uses: number;
}

export class Hero {
  hid: number;
  hname: string;
  minvalue: number;
  maxvalue: number;
  uses: number;
  usesRemaining: number;

  constructor(IHero: IHero) {
    this.hid = IHero.hid;
    this.hname = IHero.hname;
    this.minvalue = IHero.minvalue;
    this.maxvalue = IHero.maxvalue;
    this.uses = IHero.uses;
    this.usesRemaining = this.uses;
  }
  attack(villain: Villain) {
    if (this.usesRemaining > 0 && villain.hitPoints > 0) {
      let damage: number = this.diceRoll();
      villain.damageTaken(damage);
      this.usesRemaining--;
      return damage;
    } else {
      return 0;
    }
  }

  diceRoll(): number {
    return (
      Math.floor(Math.random() * (this.maxvalue - this.minvalue + 1)) +
      this.minvalue
    );
  }
}
