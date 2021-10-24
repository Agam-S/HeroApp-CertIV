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

  // diceRoll(): number {
  //   return (
  //     Math.floor(Math.random() * (this.maxvalue - this.minvalue + 1)) +
  //     this.minvalue
  //   );
  // }
}
