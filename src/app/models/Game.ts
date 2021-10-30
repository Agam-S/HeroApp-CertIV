export interface IGame {
  gametime: Date;
  whowon: string;
}
export class Game {
  gametime: Date;
  whowon: string;
  constructor(whowon: string, gametime: Date) {
    this.gametime = gametime;
    this.whowon = whowon;
  }
}
