export class Post {
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
  getTitle(){
    return this.title;
  }

  getContent(){
    return this.content;
  }

  getLoveIts(){
    return this.loveIts;
  }

  getCreatedAt(){
    return this.createdAt;
  }
}
