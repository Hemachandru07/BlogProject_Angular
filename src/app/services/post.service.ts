import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPost } from '../models/add-post.model';
import { Post } from '../models/post.model';
import { UpdatePost } from '../models/update-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;
  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiBaseUrl + "/api/posts");
  }

  getPostById(id: string): Observable<Post>{
    return this.http.get<Post>(this.apiBaseUrl + "/api/posts/" + id);
  }

  updatePost(id: string, updatePost: UpdatePost): Observable<Post>{
    return this.http.put<Post>(this.apiBaseUrl + "/api/posts/"+id,updatePost);
  }

  addPost(addPost: AddPost): Observable<Post>{
    return this.http.post<Post>(this.apiBaseUrl + "/api/posts", addPost);
  }

  deletePost(id: string): Observable<Post>{
    return this.http.delete<Post>(this.apiBaseUrl + "/api/posts/" + id);
  }
}
