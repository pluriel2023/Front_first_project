import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {

    return this.http.get<Post[]>(this.url);
  }

  public addPost(post) {
   
    return this.http.post<Post>(this.url,post);
  }
  public deletePost(id:number) {

    return this.http.delete<Post>(this.url+"/"+id);
  }
  getById(id: number) {
    return this.http.get<Post>(this.url+"/"+id);
  }
   
  update(post) {
   return this.http.put<Post>(
    this.url+"/"+post.id,post
   );
  }

}
