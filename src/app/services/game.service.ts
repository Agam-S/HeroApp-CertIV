import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from '../models/Game';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly baseUrl = 'https://localhost:5001/game';
  readonly webUrl = 'http://swinburne-swd.somee.com/HeroPhase101/Game';
  readonly jsonURL =
    'https://my-json-server.typicode.com/Agam-S/heroesJsonServer/hero';
  constructor(private _http: HttpClient) {}

  GetGames(): Observable<Game[]> {
    return this._http.get<Game[]>(this.webUrl);
  }
  PostGame(game: IGame): Observable<IGame> {
    return this._http.post<IGame>(this.webUrl, game);
  }
}
