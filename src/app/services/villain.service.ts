import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';
import { Villain } from '../models/Villain';

@Injectable({
  providedIn: 'root',
})
export class VillainService {
  readonly baseUrl = 'https://localhost:5001/Hero';
  readonly webUrl = 'http://swinburne-swd.somee.com/HeroPhase101/Villain';
  readonly aBaseUrl =
    'https://my-json-server.typicode.com/Agam-S/heroesJsonServer/hero';
  constructor(private _http: HttpClient) {}

  GetVillain(): Observable<Villain[]> {
    return this._http.get<Villain[]>(this.webUrl);
  }
}
