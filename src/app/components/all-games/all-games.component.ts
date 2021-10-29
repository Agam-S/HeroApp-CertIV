import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css'],
})
export class AllGamesComponent implements OnInit {
  gameList: Game[];
  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this._gameService.GetGames().subscribe((games) => {
      this.gameList = games;
      console.log(this.gameList);
    });
  }
}
