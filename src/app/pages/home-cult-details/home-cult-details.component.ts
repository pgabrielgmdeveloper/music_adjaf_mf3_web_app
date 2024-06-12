import { Component, OnInit } from '@angular/core';
import { TransferInfoCultService } from '../../services/transfer-info-cult.service';
import { CultResponse } from '../../model/cult/cult';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MusicApiService } from '../../services/music-api.service';
import { MusicDownload } from '../../model/music/music';

@Component({
  selector: 'app-home-cult-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home-cult-details.component.html',
  styleUrl: './home-cult-details.component.scss'
})
export class HomeCultDetailsComponent implements OnInit {

  cult: CultResponse = {} as CultResponse;
  constructor(private cultInfoService: TransferInfoCultService, private musicService: MusicApiService){}

  ngOnInit(): void {
    this.cult = this.cultInfoService.getCultInfos ? this.cultInfoService.getCultInfos : {} as CultResponse
    const musicsIds = this.cult.praise.map(p => p.music.id);
    this.musicService.getMusicsUrl(musicsIds).subscribe(
      {
        next: res => {
          this.cult.praise.map(praise => {
            const indexMusicDownload = res.findIndex(music => music.id == praise.music.id);
            praise.music = res[indexMusicDownload];
          })
        },
        error: err => {
          alert("error ao buscar musicas do culto");
        }
      }

    );

  }



}
