import { LocalStorageService } from './../../shared/services/storage/local-storage.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { LocalStorage } from 'src/app/shared/enums/localStorage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = new Subject<any>();

  constructor(private localStorageService : LocalStorageService ){ }

  createUser(user: User): Observable<any>{
    this.localStorageService.set(LocalStorage.Usario, user)
    this.auth.next({sucess:'true'})
    return this.auth.asObservable()
  }

  getUser(): Observable<any>{
    const user = this.localStorageService.get(LocalStorage.Usario)
    this.auth.next(user)
    return this.auth.asObservable()
  }

  isLogado(): boolean{
    if(this.localStorageService.get(LocalStorage.UsuarioLogado) != null){
      return true
    }
    return false
  }
}
