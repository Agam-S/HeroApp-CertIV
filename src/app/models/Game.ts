export interface IGame {
  GAMEID: number;
  GAMETIME: Date;
  WHOWON: string;
}
export class Game {
  GAMEID: number;
  GAMETIME: Date;
  WHOWON: string;
  constructor(GAMEID: number, WHOWON: string, GAMETIME: Date) {
    this.GAMEID = GAMEID;
    this.GAMETIME = GAMETIME;
    this.WHOWON = WHOWON;
  }
}
