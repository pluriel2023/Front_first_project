import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-form-add-post',
  templateUrl: './form-add-post.component.html',
  styleUrls: ['./form-add-post.component.css']
})
export class FormAddPostComponent implements OnInit {

  post: Post = {
    title: '',
    body: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(post: Post){
    console.log('I am in adding')
    //----------------> Traitemnt Envoi ver L'api
    
    console.log(post);
  }

}
