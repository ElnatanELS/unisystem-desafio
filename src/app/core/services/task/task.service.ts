import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LocalStorage } from 'src/app/shared/enums/localStorage.enum';
import { LocalStorageService } from 'src/app/shared/services/storage/local-storage.service';
import { Task } from './../../../shared/interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private localStorageService: LocalStorageService) {}

  createTask(task: Task[]) {
    this.localStorageService.set(LocalStorage.Task, task);

    return of({})
  }

  getTasks() {
     const tasks = this.localStorageService.get(LocalStorage.Task)

    return of(tasks)
  }

}
