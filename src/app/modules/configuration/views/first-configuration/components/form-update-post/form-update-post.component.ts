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

  loadingPost:Boolean=false;
  constructor( private route: ActivatedRoute,private router: Router,private firstService: FirstService) { 
    
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      console.log(this.post);
      
      this.getById(id);
     
    });
    
    
  }
  getById(id: number) {
    this.firstService.getById(id).subscribe((data) => {
      
      this.post = data;
      this.loadingPost=true;
      console.log(this.post);
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
    
  }

 
  handleSubmit(post: Post){
    console.log('I am in updating')
    //----------------> Traitemnt Envoi ver L'api
    this.post.title=post.title;
   this.post.body=post.body;
    this.firstService.update(this.post).subscribe(Response => {
      alert("Post updated successfully.");
      console.log('Post updated:', Response);
      this.router.navigate(['/configuration/first']);
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });


}
}
