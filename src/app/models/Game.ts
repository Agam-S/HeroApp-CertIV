export interface IGame {
  GAMEID: number;
  GAMETIME: Date;
  WHOWON: string;
}
export class Game {
  GAMEID: number;
  GAMETIME: Date;
  WHOWON: string;
  constructor(GAMEID: number, WHOWON: string) {
    this.GAMEID = GAMEID;
    this.GAMETIME = new Date();
    this.WHOWON = WHOWON;
  }
}
