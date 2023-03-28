import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { SecondTaskComponent } from './views/second-task/second-task.component';


@NgModule({
  declarations: [
    TaskComponent,
    SecondTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
