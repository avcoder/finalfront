import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  game = {
    title: '',
    publisher: '',
    imageUrl: ''
  };

  response: any;

  async post() {
    this.response = await this.webService.addGame(this.game);
    this.webService.games.push(this.response);
    this.router.navigate(['/admin']);
  }

  constructor(private webService: WebService, private router: Router) {}

  ngOnInit() {}
}
