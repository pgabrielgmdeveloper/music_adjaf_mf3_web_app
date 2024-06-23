import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AddPraise, CreateCultRequest, CultResponse} from "../model/cult/cult";
import { CreateMusic, Music, MusicDownload } from '../model/music/music';

import { Group } from '../model/group/group';
import { LoginRequest, LoginResponse } from '../model/auth/auth';
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

  addPraiseOnCult(payload: AddPraise): Observable<any> {
    
    return this.http.post<any>(`${this.url}/cult/addpraise`, payload).pipe(
      res => res,
      err => err
    );
  }

  getCultById(cultId: string): Observable<CultResponse> {
    return this.http.get<CultResponse>(`${this.url}/cult/${cultId}`).pipe(
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

  get getGroups() : Observable<Array<Group>> {
    return this.http.get<Array<Group>>(`${this.url}/singer`).pipe(
      res => res,
      err => err
    );
  }
  

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/authentication`,payload).pipe(
      res => res,
      err => err,
    )
  }

}
