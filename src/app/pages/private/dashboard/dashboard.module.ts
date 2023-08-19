import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminNavbarComponent } from 'src/app/shared/components/admin-navbar/admin-navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminNavbarComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatIconModule

  ]
})
export class DashboardModule { }
