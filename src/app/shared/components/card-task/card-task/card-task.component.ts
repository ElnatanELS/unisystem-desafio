import { Task } from './../../../interfaces/task';
import { Component, Input } from '@angular/core';

@Component({
  selector:'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent {
  @Input() task: Task



}
