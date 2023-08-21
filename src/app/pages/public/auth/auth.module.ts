import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './../../../shared/services/snackbar/snackbar.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],

  providers: [SnackbarService, MatSnackBar],
})
export class AuthModule {}
