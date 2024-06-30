import { Component, OnInit } from '@angular/core';
import { CultResponse } from '../../model/cult/cult';
import { MusicApiService } from '../../services/music-api.service';
import {  HttpClient, provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TransferInfoCultService } from '../../services/transfer-info-cult.service';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-cult',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatButtonModule, MatIconModule],
  templateUrl: './home-cult.component.html',
  styleUrl: './home-cult.component.scss',
})
export class HomeCultComponent implements OnInit {
  
  public cults : Array<CultResponse> = [];
  private musicService: MusicApiService;

  constructor(private _httpClient: HttpClient, private route: Router, private cultInfoService: TransferInfoCultService, private toast: ToastrService){
    this.musicService = new MusicApiService(_httpClient);
  }
  
  ngOnInit(): void {
    this.musicService.getCultsDay.subscribe(
      {
        next: (res: Array<CultResponse>) => {
          
          this.cults = res
        },
        error: err => {
            if(err.status == 403) {

              this.toast.error("sessão expirada")
              this.route.navigate(["login"])
            }
            this.toast.error("Error ao buscar Cultos", "Entre em contato com o ADM do sistema",)
        }
      }
      
    );
    
  }


  navigateToCultDetails(index: number ) {
    this.cultInfoService.setCultInfos = this.cults[index].id;
    this.route.navigate(["home/cult/details"]);
  }
  navigateToCreateCult(){
    this.route.navigate(["home/cult/create-cult"])
  }




}
