import { Component, OnInit } from '@angular/core';
import { TransferInfoCultService } from '../../services/transfer-info-cult.service';
import { CultResponse } from '../../model/cult/cult';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MusicApiService } from '../../services/music-api.service';
import { MusicDownload } from '../../model/music/music';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-cult-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home-cult-details.component.html',
  styleUrl: './home-cult-details.component.scss'
})
export class HomeCultDetailsComponent implements OnInit {

  cult: CultResponse = {} as CultResponse;
  constructor(private cultInfoService: TransferInfoCultService, private musicService: MusicApiService, private router: Router, private toast: ToastrService){}

  ngOnInit(): void {
    const cultId = this.cultInfoService.getCultInfos;
    this.musicService.getCultById(cultId).pipe(
      tap(
        {
          next: res => {
            this.cult = res;
          },
          error: err => {
            if(err.status == 403) {

              this.toast.error("sessão expirada")
              this.router.navigate(["login"])
            }
            this.toast.error("Entre em contato com o ADM do sistema","Error ao buscar Cultos",)
          },
        }
      ),
      map(res => res.praise.map(p => p.music.id)),
      map(res => {
        this.musicService.getMusicsUrl(res).subscribe(
          {
            next: res => {
              this.cult.praise.map(praise => {
                const indexMusicDownload = res.findIndex(music => music.id == praise.music.id);
                praise.music = res[indexMusicDownload];
              })
            },
            error: err => {
              if(err.status == 403) {

                this.toast.error("sessão expirada")
                this.router.navigate(["login"])
              }
              this.toast.error("Entre em contato com o ADM do sistema","Error ao buscar Musicas !",)

            }
          }
        )
      })
    ).subscribe();
    
  }
  
  navigateToAddPraise(){
    this.cultInfoService.setCultInfos = this.cult.id;
    this.router.navigate(["home/cult/add-praise"]);
  }

}
