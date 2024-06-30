import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/auth/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  private TOKEN_KEY = "TOKEN";
  private ROLES_KEY = "SCOPES"
  private userLoggedSubject = new BehaviorSubject<boolean>(false);
  userLogged$ = this.userLoggedSubject.asObservable();
  constructor() { 

  }

  setUserLoggedSubject(value: boolean){
    this.userLoggedSubject.next(value)
  }

  set setToken(loginResponse: LoginResponse) {
    sessionStorage.setItem(this.TOKEN_KEY, loginResponse.token);
    sessionStorage.setItem(this.ROLES_KEY, loginResponse.roles.toString());
  }

  get getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY)
  }

  get getRoles(): string[] {
    return sessionStorage.getItem(this.ROLES_KEY)?.split(",") || []
  }

}
