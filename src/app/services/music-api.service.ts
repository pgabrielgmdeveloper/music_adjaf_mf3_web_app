import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CreateCultRequest, CultResponse} from "../model/cult/cult";
import { CreateMusic, Music, MusicDownload } from '../model/music/music';
import { Router } from '@angular/router';
import { ListFormat } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  private url: string = "http://localhost:8080/v1"

  constructor(private http: HttpClient) { }


  createCult(payload: CreateCultRequest): Observable<any>{
    return this.http.post(`${this.url}/cult`, payload).pipe(
      res => res,
      err => err
    );
  }


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

  getMusics(name?: string): Observable<Array<Music>> {
    return this.http.get<Array<Music>>(`${this.url}/music?name=${name ?? ""}`).pipe(
      res => res,
      err => err
    );
  }

  getMusicsUrl(ids: Array<string>): Observable<Array<MusicDownload>> {
    return this.http.post<Array<MusicDownload>>(`${this.url}/music/pressined`, {musicsIds: ids}).pipe(
      res => res,
      err => err
    );
  }
}
