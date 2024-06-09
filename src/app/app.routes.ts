import { Routes } from '@angular/router';
import { HomeCultComponent } from './pages/home-cult/home-cult.component';
import { HomeCultDetailsComponent } from './pages/home-cult-details/home-cult-details.component';
export const routes: Routes = [
  
  {
    path: "home", component: HomeCultComponent
  },
  {
    path:"home/cult/details", component: HomeCultDetailsComponent
  }

];

