import { LocalStorageService } from './../../../../shared/services/storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    }
  )
  constructor(private localStorageService:LocalStorageService) {}

  save(){
    this.localStorageService.set('usuario',this.form.value)
  }

  ngOnInit(): void {}
}
