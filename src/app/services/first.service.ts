import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  readonly url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    const getAllEndPoint = this.url + 'posts';
    return this.http.get<Post[]>(getAllEndPoint);
  }

}
