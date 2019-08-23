import { Component } from '@angular/core';
import {Post} from './helper/Post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = [
    new Post('Premier post', 'Ceci est le premier post, neutre', 0, new Date()),
    new Post('Second post', 'Ceci est le second post, très apprécié', 16, new Date()),
    new Post('Troisième post', 'Ceci est le troisième post, très controversé', -9, new Date())
  ];

}
