import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../services/auth-token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const token = authService.getToken;
  if (token == null){
    router.navigate(["/login"]);
  }
  return true;
};

export const authGuardADMIN : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const scopes = authService.getRoles
  if (!(scopes.includes("ADMIN"))){
    router.navigate(["/login"]);
  }
  return true
}
export const authGuardUSER : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const scopes = authService.getRoles
  if (!(scopes.includes("USER"))){
    console.log("user")
    console.log(scopes)
    router.navigate(["/login"]);
  }
  return true
}
export const authGuardREGENTE : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const scopes = authService.getRoles
  if (!(scopes.includes("REGENTE"))){
    router.navigate(["/login"]);
  }
  return true
}
export const authGuardSONOPLASTA : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const scopes = authService.getRoles
  if (!(scopes.includes("SONOPLASTA"))){
    router.navigate(["/login"]);
  }
  return true
}
