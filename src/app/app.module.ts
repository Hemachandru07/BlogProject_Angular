import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AppRoutingModule } from './app-routing.module';
import { PostService } from './services/post.service';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
