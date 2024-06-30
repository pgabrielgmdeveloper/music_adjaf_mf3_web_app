import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthTokenService } from './services/auth-token.service';


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
export class AppComponent implements OnInit {

  title = 'adjaf-music-web-app';
  currentPage = "cultos"
  userlogged: boolean = false

  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSidenav() {
    this.sidenav.toggle();
  }

  constructor(private router: Router, private auth: AuthTokenService) {
    this.userlogged = auth.getToken !== null
  }
  ngOnInit(): void {
    this.auth.userLogged$.subscribe((userLogged: boolean) => {
        this.userlogged = userLogged
    }) 
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
