import { Component } from '@angular/core';
import {Post} from './models/Post.model';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBhWvh8m4A1ZNcX6SqMGnkn6a0XhUds1RM",
      authDomain: "ocr-blog-89fca.firebaseapp.com",
      databaseURL: "https://ocr-blog-89fca.firebaseio.com",
      projectId: "ocr-blog-89fca",
      storageBucket: "",
      messagingSenderId: "823283813904",
      appId: "1:823283813904:web:ee61de12e41f1f0d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
