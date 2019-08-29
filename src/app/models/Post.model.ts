export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
  constructor(title= 'Post', content= 'Contenu du post', loveIts= 0, createdAt= new Date()) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }

  upVote(){
    this.loveIts++;
  }

  downVote(){
    this.loveIts--;
  }
}
