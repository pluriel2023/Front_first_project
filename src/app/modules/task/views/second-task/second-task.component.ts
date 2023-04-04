import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {

  constructor() { }
  showRedDiv = true;
  

  switch() {
    this.showRedDiv = !this.showRedDiv;
    
  }
  ngOnInit(): void {
  }

}
