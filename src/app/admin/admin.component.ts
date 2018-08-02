import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  response: any;
  message: string;

  async fillData() {
    try {
      this.response = await this.webService.fillData();
      this.webService.games.push(...this.response.ops);
    } catch (error) {
      this.message = 'Unable to fill data';
    }
  }

  dismiss() {
    this.message = '';
  }

  async delete(id) {
    this.response = await this.webService.deleteGame(id);
    if (this.response.success) {
      this.response = await this.webService.getGames();
      this.webService.games = this.response.games;
    } else {
      this.message = 'Unable to delete game';
    }
  }

  constructor(private webService: WebService) {
    // console.log(this.webService.games);
  }

  async ngOnInit() {
    try {
      this.response = await this.webService.getGames();
      this.webService.games = this.response.games;
    } catch (error) {
      this.message = 'Unable to get games';
    }
  }
}
