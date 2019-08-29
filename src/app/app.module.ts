import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {PostService} from './service/post.service';
import { RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostListComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
