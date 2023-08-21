import { Task } from './../../../interfaces/task';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector:'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent {
  @Input() task: Task

  @Output() editEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();

  editButton() {
    this.editEvent.emit(this.task.id);
  }

  removeButton() {
    this.removeEvent.emit(this.task.id);
  }



}
