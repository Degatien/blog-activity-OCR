import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

export class PostService {

  postsSubject = new Subject<any[]>();
  private posts: any[];

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string = '', content: string = '', loveIt: number = 0, createdAt: Date = new Date()) {
    const post = new Post(title, content, loveIt, createdAt);
    post.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(post);
    this.emitPostSubject();
  }

  removePost(post: Post) {
    const IndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(IndexToRemove,1);
    this.emitPostSubject();
  }
  constructor() {
    this.posts = [
      new Post('Premier post', 'Ceci est le premier post, suffisament recent pour que personne n\'ai eu le temps de voter', 0, new Date()),
      new Post('Second post', 'Ceci est le second post, très apprécié', 16, new Date()),
      new Post('Troisième post', 'Ceci est le troisième post, très controversé', -9, new Date())
    ];
    this.posts[0].id = 0;
    this.posts[1].id = 1;
    this.posts[2].id = 2;
  }
}
