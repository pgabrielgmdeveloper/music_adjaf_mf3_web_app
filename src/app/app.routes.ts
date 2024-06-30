import { Routes } from '@angular/router';
import { HomeCultComponent } from './pages/home-cult/home-cult.component';
import { HomeCultDetailsComponent } from './pages/home-cult-details/home-cult-details.component';
import { HomeMusicComponent } from './pages/home-music/home-music.component';
import { HomeCultCreateComponent } from './pages/home-cult-create/home-cult-create.component';
import { HomeMusicCreateComponent } from './pages/home-music-create/home-music-create.component';
import { HomeCultAddpraiseComponent } from './pages/home-cult-addpraise/home-cult-addpraise.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, authGuardADMIN, authGuardUSER } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
export const routes: Routes = [
  {
    path:"", redirectTo: "/home", pathMatch:"full"
  },
  {
    path: "home", component: HomeCultComponent, canActivate: [authGuard,authGuardUSER]
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path:"home/cult/details", component: HomeCultDetailsComponent, canActivate: [authGuard,authGuardUSER]
  },
  {
    path: "home/cult/add-praise", component: HomeCultAddpraiseComponent, canActivate: [authGuard,authGuardUSER]
  },
  {
    path:"home/cult/create-cult", component: HomeCultCreateComponent, canActivate: [authGuard,authGuardUSER]
  },
  {
    path:"home/music", component: HomeMusicComponent, canActivate: [authGuard,authGuardUSER]
  },
  {
    path: "home/music/create-music", component: HomeMusicCreateComponent, canActivate: [authGuard,authGuardUSER]
  }

];

