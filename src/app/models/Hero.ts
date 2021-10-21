import { Villain } from './Villain';

export class Hero {
  hid: number;
  hname: string;
  minvalue: number;
  maxvalue: number;
  uses: number;

  constructor(
    hid: number,
    hname: string,
    minvalue: number,
    maxvalue: number,
    uses: number
  ) {
    this.hid = hid;
    this.hname = hname;
    this.minvalue = minvalue;
    this.maxvalue = maxvalue;
    this.uses = uses;
  }
  usesOfHero(v: Villain) {
    if (this.uses > 0 && v.hitPoints > 0) {
      let damage: number = this.diceRoll();
      v.damageTaken(damage);
      this.uses--;
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
