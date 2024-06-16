import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Music } from '../../model/music/music';
import { MusicApiService } from '../../services/music-api.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home-music',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule],
  templateUrl: './home-music.component.html',
  styleUrl: './home-music.component.scss'
})
export class HomeMusicComponent implements OnInit {
  
  musics: Array<Music> = [];
  musicName = ""
  displayedColumns: string[] = ['name', 'singer', 'letter'];
  constructor(private musicService: MusicApiService, private route: Router){}
  
  ngOnInit(): void {
    this.eatMusics();
    
  }
  
  navigateToCreateMusic(){
    this.route.navigate(["home/music/create-music"])
  }

  private eatMusics(name?: string) {
    this.musicService.getMusics(name).subscribe({
      next: res => {
        this.musics = res
      },
      error: err => {
        alert("Error ao buscar musicas");
      }
    });

  }

  searchMusics(event: KeyboardEvent){
    this.eatMusics(this.musicName);
  }
}
