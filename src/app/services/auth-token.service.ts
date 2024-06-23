import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  private TOKEN_KEY = "TOKEN";
  private ROLES_KEY = "SCOPES"

  constructor() { 

  }

  set setToken(loginResponse: LoginResponse) {
    localStorage.setItem(this.TOKEN_KEY, loginResponse.token);
    localStorage.setItem(this.ROLES_KEY, loginResponse.roles.toString());
  }

  get getToken(): string | null {
    console.log("Recuperando otoken...")
    return localStorage.getItem(this.TOKEN_KEY)
  }

  get getRoles(): string[] {
    return localStorage.getItem(this.ROLES_KEY)?.split(",") || []
  }


}
