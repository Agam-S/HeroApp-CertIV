export interface IGame {
  gameid: number;
  gametime: Date;
  whowon: string;
}
export class Game {
  gameid: number;
  gametime: Date;
  whowon: string;
  constructor(gameid: number, whowon: string, gametime: Date) {
    this.gameid = gameid;
    this.gametime = gametime;
    this.whowon = whowon;
  }
}
