import { Component, OnInit } from '@angular/core';
import { CultResponse } from '../../model/cult/cult';
import { MusicApiService } from '../../services/music-api.service';
import {  HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-cult',
  standalone: true,
  imports: [],
  templateUrl: './home-cult.component.html',
  styleUrl: './home-cult.component.scss',
})
export class HomeCultComponent implements OnInit {
  
  public cults : Array<CultResponse> = [];
  private musicService: MusicApiService;

  constructor(private _httpClient: HttpClient){
    this.musicService = new MusicApiService(_httpClient);
  }
  
  ngOnInit(): void {
    this.musicService.getCultsDay.subscribe(
      {
        next: (res: Array<CultResponse>) => {
          this.cults = res
        },
        error: err => {
            console.log(err)
        }
      }
    );
  }




}
