import { Component, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SharedModule,
    MatListModule
  ]

})
export class AppComponent {

  title = 'adjaf-music-web-app';
  currentPage = "Cultos"
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSidenav() {
    this.sidenav.toggle();
  }

  constructor(private router: Router) {

  }

  navigateToHome(){
    
    this.router.navigate(["home"]);
    this.currentPage = "Cultos"

    this.sidenav.toggle();
    
  }

  navigateToMusic(){
    
    this.router.navigate(["home/music"]);
    this.currentPage = "Musicas"
    this.sidenav.toggle();
  }

}
