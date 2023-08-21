import { TaskService } from './../../../../core/services/task/task.service';
import { Task } from './../../../../shared/interfaces/task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}
  ngOnInit(): void {
   this.getTaks()
  }

  redirectToNewTask() {
    this.router.navigateByUrl('/dashboard/create');
  }

  editTask(event: any) {
    this.router.navigateByUrl('/dashboard/edit/' + event);
  }

  removeTask(event: any) {
    const id = this.tasks.findIndex((task) => {
     return task.id === event
    })

    this.tasks.splice(id, 1);
    this.taskService.createTask(this.tasks).subscribe((res) => {
      this.getTaks()
      this.snackbarService.openSnackBar('Atividade Removida', 'success');
      this.router.navigateByUrl('dashboard/tasks');
    });
  }

  getTaks(){
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res == null ? [] : res;
    });
  }
}
