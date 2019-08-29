import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onUpVoteClick() {
    this.post.upVote();
  }

  onDownVoteClick() {
    this.post.downVote();
  }

  onDeleteClick() {
    this.postService.removePost(this.post);
  }

}
