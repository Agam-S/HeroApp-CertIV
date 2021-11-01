export interface IGame {
  gametime: any;
  whowon: string;
}
export class Game {
  gametime: any;
  whowon: string;
  constructor(whowon: string, gametime: any) {
    this.gametime = gametime;
    this.whowon = whowon;
  }
}
