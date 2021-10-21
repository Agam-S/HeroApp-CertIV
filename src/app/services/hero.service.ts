import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  readonly baseUrl = 'https://localhost:5001/Hero';
  readonly webUrl = 'http://swinburne-swd.somee.com/HeroPhase101/Hero';
  readonly aBaseUrl =
    'https://my-json-server.typicode.com/Agam-S/heroesJsonServer/hero';
  constructor(private _http: HttpClient) {}

  GetHero(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.webUrl);
  }
  PostHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this.webUrl, hero);
  }
}
