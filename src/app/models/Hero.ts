export class Hero {
  hid: number;
  hname: string;
  minvalue: number;
  maxvalue: number;
  uses: number;
  heroSelected: boolean;
  heroActive: boolean;

  constructor(
    hid: number,
    hname: string,
    minvalue: number,
    maxvalue: number,
    uses: number,
    heroSelected: boolean,
    heroActive: boolean
  ) {
    this.hid = hid;
    this.hname = hname;
    this.minvalue = minvalue;
    this.maxvalue = maxvalue;
    this.uses = uses;
    this.heroSelected = heroSelected;
    this.heroSelected = false;
    this.heroActive = heroActive;
  }
  usesOfHero() {
    if (this.uses > 0) {
      this.uses--;
    } else if (this.uses == 0) {
      this.heroActive = false;
    }
    return this.diceRoll();
  }
  diceRoll() {
    return (
      Math.floor(Math.random() * (this.maxvalue - this.minvalue + 1)) +
      this.minvalue
    );
  }
}
