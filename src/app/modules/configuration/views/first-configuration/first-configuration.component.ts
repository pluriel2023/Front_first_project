import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-first-configuration',
  templateUrl: './first-configuration.component.html',
  styleUrls: ['./first-configuration.component.css']
})
export class FirstConfigurationComponent implements OnInit {

  loadingPost: boolean = true;
  posts: Post[] = [];

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.firstService.getAll().subscribe({
      next: (response : any) => {
        this.loadingPost = false;
        this.posts = response;
      },
      error: (error: HttpErrorResponse) => {

      }
    });
  }

}
