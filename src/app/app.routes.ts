import { Routes } from '@angular/router';
import { HomeCultComponent } from './pages/home-cult/home-cult.component';
import { HomeCultDetailsComponent } from './pages/home-cult-details/home-cult-details.component';
import { HomeMusicComponent } from './pages/home-music/home-music.component';
import { HomeCultCreateComponent } from './pages/home-cult-create/home-cult-create.component';
import { HomeMusicCreateComponent } from './pages/home-music-create/home-music-create.component';
import { HomeCultAddpraiseComponent } from './pages/home-cult-addpraise/home-cult-addpraise.component';
export const routes: Routes = [
  
  {
    path: "home", component: HomeCultComponent
  },
  {
    path:"home/cult/details", component: HomeCultDetailsComponent
  },
  {
    path: "home/cult/add-praise", component: HomeCultAddpraiseComponent
  },
  {
    path:"home/cult/create-cult", component: HomeCultCreateComponent
  },
  {
    path:"home/music", component: HomeMusicComponent
  },
  {
    path: "home/music/create-music", component: HomeMusicCreateComponent
  }

];

