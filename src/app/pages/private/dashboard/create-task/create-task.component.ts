import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { TaskService } from './../../../../core/services/task/task.service';

@Component({
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  tasks: Task[] = [];
  id: number ;
  task:Task

  constructor(
    private taskService: TaskService,
    private router: Router,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {

    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res == null ? [] : res;
    });
  }
  ngOnInit(): void {
    this.id = this.tasks.findIndex((task) => {
      return task.id === Number(this.route.snapshot.paramMap.get('id'))
     })
    if(this.id >= 0){
      this.task = this.tasks[this.id]
      this.form.patchValue( this.task)

    }
  }

  create() {
    let taskCopy = [...this.tasks];
    const task: Task = {
      id: this.tasks.length > 0 ? this.tasks.at(-1)!.id + 1 : 1,
      title: String(this.form.value.title),
      description: String(this.form.value.description),
    };
    taskCopy.push(task);
    this.taskService.createTask(taskCopy).subscribe((res) => {
      this.snackbarService.openSnackBar('Atividade Criada', 'success');
      this.router.navigateByUrl('dashboard/tasks');
    });
  }

  edit(){
    let taskCopy = [...this.tasks];
    const task: Task = {
      id: this.task.id,
      title: String(this.form.value.title),
      description: String(this.form.value.description),
    };
    taskCopy[this.id] = task

    this.taskService.createTask(taskCopy).subscribe((res) => {
      this.snackbarService.openSnackBar('Atividade Editada', 'success');
      this.router.navigateByUrl('dashboard/tasks');
    });


  }
}
