import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../helper/Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

  onUpVoteClick(){
    this.post.upVote();
  }

  onDownVoteClick(){
    this.post.downVote();
  }
}
