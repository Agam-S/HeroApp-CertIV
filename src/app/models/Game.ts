export interface IGame {
  gameid: number;
  gametime: string;
  whowon: string;
}
export class Game {
  gameid: number;
  gametime: string;
  whowon: string;
  constructor(gameid: number, whowon: string, gametime: string) {
    this.gameid = gameid;
    this.gametime = gametime;
    this.whowon = whowon;
  }
}
