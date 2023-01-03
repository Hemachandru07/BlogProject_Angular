import { Component, OnInit } from '@angular/core';
import { AddPost } from 'src/app/models/add-post.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  post: AddPost = {
    author: "",
    content: "",
    title: "",
    featuredImageUrl: "",
    urlHandle: "",
    summary: "",
    publishedDate: "",
    updatedDate: "",
    visible: ""
  }
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.postService.addPost(this.post)
    .subscribe(response =>
      {
        alert("success");
      });
  }

}
