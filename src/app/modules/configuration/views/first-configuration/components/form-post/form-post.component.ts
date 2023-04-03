import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  form: FormGroup;

  @Input() isAdding: boolean;

  @Input() post: Post;

  @Output() postSubmit = new EventEmitter<Post>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      body: ['', {
        validators: [Validators.required]
      }]
    });
    this.form.patchValue(this.post);
    console.log(this.post);
  }

  handleSubmit(event: Event){
    event.preventDefault();
    const values = this.form.value as Post;
    this.postSubmit.emit(values);
  }


}
