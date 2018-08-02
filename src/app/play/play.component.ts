import { Component, OnInit } from '@angular/core';
import {
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  PipeTransform,
  Pipe
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  url: string;
  constructor() {}

  ngOnInit() {
    const here = new URL(window.location.href);
    const endpart = here.searchParams.get('game');

    this.url = `https://archive.org/embed/${endpart}`;
  }
}
