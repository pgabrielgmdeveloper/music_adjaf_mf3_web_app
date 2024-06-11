import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CultResponse} from "../model/cult/cult";
import { CreateMusic } from '../model/music/music';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  private url: string = "http://localhost:8080/v1"

  constructor(private http: HttpClient) { }


  get getCultsDay() : Observable<Array<CultResponse>> {
    return this.http.get<Array<CultResponse>>(`${this.url}/cult`).pipe(
      res => res,
      err => err
    );
  }

  createMusic(payload: CreateMusic): Observable<any> {
    const formData = new FormData();
    const musicJson = {name: payload.name,singer: payload.singer, letter: payload.letter}
    formData.append("music", payload.music!);
    formData.append("musicJson", JSON.stringify(musicJson));
    return this.http.post<any>(`${this.url}/music`, formData).pipe(
      res => res,
      err => err
    );
  }
}
