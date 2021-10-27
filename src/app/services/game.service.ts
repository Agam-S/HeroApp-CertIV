import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from '../models/Game';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly baseUrl = 'https://localhost:5001/Hero';
  readonly webUrl = 'http://swinburne-swd.somee.com/HeroPhase101/Game';
  readonly aBaseUrl =
    'https://my-json-server.typicode.com/Agam-S/heroesJsonServer/hero';
  constructor(private _http: HttpClient) {}

  GetGames(): Observable<History[]> {
    return this._http.get<History[]>(this.webUrl);
  }
  PostGame(game: IGame): Observable<IGame> {
    return this._http.post<IGame>(this.webUrl, game);
  }
}
