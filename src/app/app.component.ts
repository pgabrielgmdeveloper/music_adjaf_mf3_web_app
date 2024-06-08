import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[
    RouterOutlet,
    SharedModule
  ]

})
export class AppComponent {
  title = 'adjaf-music-web-app';
}
