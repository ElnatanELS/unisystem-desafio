import { SnackbarService } from './../../../../shared/services/snackbar/snackbar.service';
import { User } from './../../../../shared/interfaces/user';
import { AuthService } from './../../../../core/services/auth/auth.service';
import { LocalStorageService } from './../../../../shared/services/storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    }
  )
  constructor(private authService:AuthService, private snackbarService:SnackbarService, private router: Router) {}

  save(){
    const user: User = {
      name: String(this.form.value.name),
      email: String(this.form.value.email),
      password: String(this.form.value.password),
    }
    this.authService.createUser(user).subscribe((res)=>{
      this.snackbarService.openSnackBar("Usuario Criado", "success")
      this.router.navigateByUrl('auth/login')

    })
  }

  ngOnInit(): void {}
}
