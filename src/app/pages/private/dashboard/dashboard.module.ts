import { CardTaskComponent } from './../../../shared/components/card-task/card-task/card-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminNavbarComponent } from 'src/app/shared/components/admin-navbar/admin-navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminNavbarComponent,
    TasksComponent,
    CardTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule

  ],
  providers: [SnackbarService, MatSnackBar],
})
export class DashboardModule { }
