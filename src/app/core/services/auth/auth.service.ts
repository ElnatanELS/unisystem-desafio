import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorage } from 'src/app/shared/enums/localStorage.enum';
import { User } from 'src/app/shared/interfaces/user';
import { LocalStorageService } from 'src/app/shared/services/storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private localStorageService : LocalStorageService ){ }

  createUser(user: User): Observable<any>{
    this.localStorageService.set(LocalStorage.Usario, user)
    return of({})
  }

  getUser(): Observable<any>{
    const user = this.localStorageService.get(LocalStorage.Usario)
    return of(user)
  }

  isLogado(): boolean{
    if(this.localStorageService.get(LocalStorage.UsuarioLogado) != null){
      return true
    }
    return false
  }
}
