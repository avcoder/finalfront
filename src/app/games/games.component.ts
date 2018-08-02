import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  response: any;

  constructor(private webService: WebService) {}

  async ngOnInit() {
    this.response = await this.webService.getGames();
    this.webService.games = this.response.games;
  }
}
