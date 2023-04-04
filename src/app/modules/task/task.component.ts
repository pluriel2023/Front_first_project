import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  showRedDiv = true;
  

  switch() {
    this.showRedDiv = !this.showRedDiv;
    
  }
  ngOnInit(): void {
  }

}
