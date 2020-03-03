import { Component, OnInit } from '@angular/core';
import { randomBytes } from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagesSrc = [];
  imagesSrc2 = [];
  imagesSrc3 = [];

  constructor() {}

  ngOnInit() {
    this.images();
  }
  images() {
    for (let i = 0; i < 2; i++) {
      fetch('https://source.unsplash.com/random?sig=' + i).then(response => {
        this.imagesSrc = [...this.imagesSrc, response.url];
      });
    }
    for (let i = 3; i < 5; i++) {
      fetch('https://source.unsplash.com/random?sig=' + i).then(response => {
        this.imagesSrc2 = [...this.imagesSrc2, response.url];
      });
    }
    for (let i = 6; i < 8; i++) {
      fetch('https://source.unsplash.com/random?sig=' + i).then(response => {
        this.imagesSrc3 = [...this.imagesSrc3, response.url];
      });
    }
  }
}
