import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../services/auth-token.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);
  const token = authService.getToken;
  if (token == null){
    toast.warning("Login expirado");
    router.navigate(["/login"]);
    
  }
  return true;
};

export const authGuardADMIN : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);
  const scopes = authService.getRoles
  if (!(scopes.includes("ROLE_ADMIN"))){
    toast.warning("você não tem permissao para acessar essa pagina");
    router.navigate(["/home"]);
  }
  return true
}
export const authGuardUSER : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);
  const scopes = authService.getRoles
  if (!(scopes.includes("ROLE_USER"))){
    toast.warning("você não tem permissao para acessar essa pagina");
    router.navigate(["/login"]);
  }
  return true
}
export const authGuardREGENTE : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);
  const scopes = authService.getRoles
  if (!(scopes.includes("ROLE_REGENTE"))){
    toast.warning("você não tem permissao para acessar essa pagina");
    router.navigate(["/home"]);
  }
  return true
}
export const authGuardSONOPLASTA : CanActivateFn = (route, state) => {
  const authService: AuthTokenService = inject(AuthTokenService);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);
  const scopes = authService.getRoles
  if (!(scopes.includes("ROLE_SONOPLASTA"))){
    toast.warning("você não tem permissao para acessar essa pagina");
    router.navigate(["/home"]);
  }
  return true
}
