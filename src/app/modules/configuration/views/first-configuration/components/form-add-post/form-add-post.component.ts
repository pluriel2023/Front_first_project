import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { FirstService } from 'src/app/services/first.service';

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
  form: FormGroup;
  constructor(private router: Router,private firstService: FirstService) { 
    
  }
  
  ngOnInit(): void {
  }

  handleSubmit(post: Post){
    console.log('I am in adding')
    //----------------> Traitemnt Envoi ver L'api

    this.firstService.addPost(post).subscribe(response => {
      alert("Post created successfully.");
      console.log('Post added:', response);
      this.router.navigate(['/configuration/first']);

      return response;
    });
  }

}
