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
    const getAllEndPoint = this.url + '';
    return this.http.get<Post[]>(getAllEndPoint);
  }

  addPost(post:Post){
    const getAllEndPoint = this.url + '';
    return this.http.post<Post>(getAllEndPoint, post);
  } 

  delete(id: number){
    const getAllEndPoint = this.url + '/' +id;
    return this.http.delete<Post>(getAllEndPoint);
  }

  update(post) {
    return this.http.put<Post>(
     this.url+"/"+post.id,
     post
    );
   }
   
  getById(id: number) {
    return this.http.get<Post>(this.url+"/"+id);
  }
   

}
