import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-form-update-post',
  templateUrl: './form-update-post.component.html',
  styleUrls: ['./form-update-post.component.css']
})
export class FormUpdatePostComponent implements OnInit {

  post: Post = new Post();
  loadingPost: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: FirstService) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getById(id);
  }

  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.post = data;
      this.loadingPost = true;
      // console.log(this.post);
    });

  }

  handleSubmit(post: Post) {
    console.log('I am in updating')
    this.post.title = post.title;
    this.post.body = post.body;
    this.service.update(this.post).subscribe(
      (response: Post) => {
        console.log('Post updated successfully!', response);
        this.router.navigate(['/configuration/first']);
      },
      (error: HttpErrorResponse) => {
        console.log('Error updating post:');
        console.log(error);
      }
    );
  }

}
