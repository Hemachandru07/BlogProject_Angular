import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UpdatePost } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  post!: Post;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get("id");

        if(id){
          this.postService.getPostById(id)
          .subscribe(post =>{
            this.post = post;
          });
        }
      }
    );
  }

  onSubmit(){
    const updatePost: UpdatePost = {
      author: this.post.author,
      content: this.post.content,
      featuredImageUrl: this.post.featuredImageUrl,
      publishedDate: this.post.publishedDate,
      updatedDate: this.post.updatedDate,
      summary: this.post.summary,
      urlHandle: this.post.urlHandle,
      title: this.post.title,
      visible: this.post.visible
    }
    this.postService.updatePost(this.post.id, updatePost)
    .subscribe(
      response =>{
        alert("Success");
      }
    );
  }

  onDelete(){
    this.postService.deletePost(this.post.id)
    .subscribe(response =>{
      alert("Deletion success");
    });
  }
}
