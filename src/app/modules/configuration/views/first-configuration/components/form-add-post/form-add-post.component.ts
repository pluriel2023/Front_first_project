import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  constructor(private router: Router,private service : FirstService) { }

  ngOnInit(): void {
  }

  handleSubmit(post: Post){
    console.log('I am in adding')
    console.log(post);

    this.service.addPost(post).subscribe(
      (response: Post) => {
        console.log('Post added successfully!');
        console.log(response);
        this.router.navigate(['/configuration/first']);
      },
      (error: HttpErrorResponse) => {
        console.log('Error adding post:');
        console.log(error);
      }
    );
  }

}
