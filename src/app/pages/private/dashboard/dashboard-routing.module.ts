import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: "",
  component: DashboardComponent,
  children: [
    { path: "tasks", component: TasksComponent },
    { path: "create", component: CreateTaskComponent },
    { path: "", redirectTo: "tasks", pathMatch: "full" },
    { path: "**", redirectTo: "tasks", pathMatch: "full" },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
