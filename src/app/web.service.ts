import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  BASE_URL: string = 'http://localhost:3000';
  games: Array<object>;

  constructor(private httpClient: HttpClient) {}

  getGames() {
    return this.httpClient.get(`${this.BASE_URL}/games`).toPromise();
  }

  addGame(newGame) {
    return this.httpClient.post(`${this.BASE_URL}/add`, newGame).toPromise();
  }

  fillData() {
    return this.httpClient.get(`${this.BASE_URL}/filldata`).toPromise();
  }

  deleteGame(id) {
    return this.httpClient
      .get(`${this.BASE_URL}/admin/delete/${id}`)
      .toPromise();
  }

  editGame(id) {
    return this.httpClient.get(`${this.BASE_URL}/admin/edit/${id}`).toPromise();
  }

  updateGame(id, game) {
    return this.httpClient
      .post(`${this.BASE_URL}/admin/edit/${id}`, game)
      .toPromise();
  }
}
