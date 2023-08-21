import { User } from './../../interfaces/user';
import { LocalStorageService } from './../../services/storage/local-storage.service';
import { Component, OnInit } from "@angular/core";
import { LocalStorage } from '../../enums/localStorage.enum';
import { Router } from '@angular/router';

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {

  user:User
  constructor(private localStorageService:LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.localStorageService.get(LocalStorage.UsuarioLogado)
  }

  logout(){
    this.localStorageService.remove(LocalStorage.UsuarioLogado)
    this.router.navigateByUrl('auth')
  }
}
