import { LocalStorageService } from './../../../../shared/services/storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { LocalStorage } from 'src/app/shared/enums/localStorage.enum';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    }
  )
  constructor(private authService:AuthService, private snackbarService:SnackbarService, private router: Router, private localStorageService:LocalStorageService) {}

  ngOnInit(): void {}

  login(){
    this.authService.getUser().subscribe((user) =>{

      if( user.email === this.form.value.email && user.password === this.form.value.password){
        this.localStorageService.set(LocalStorage.UsuarioLogado, user)
        this.router.navigateByUrl('dashboard')

      } else {
        this.snackbarService.openSnackBar('Usuario e/ou senha invalida','error')
      }
    })
  }
}
