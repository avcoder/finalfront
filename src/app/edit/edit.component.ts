import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  game: object = {
    title: '',
    publisher: '',
    year: '',
    imageUrl: ''
  };

  response: any;

  constructor(
    private webService: WebService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.response = await this.webService.editGame(
      this.route.snapshot.params.id
    );
    this.game = this.response.game;
  }

  async update() {
    this.response = await this.webService.updateGame(
      this.route.snapshot.params.id,
      this.game
    );
    this.router.navigate(['/admin']);
  }
}
