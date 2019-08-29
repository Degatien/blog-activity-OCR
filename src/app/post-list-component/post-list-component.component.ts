import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../service/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  PostList: any[];
  postSubscription: Subscription;
  constructor(private postService: PostService) { }


  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.PostList = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
