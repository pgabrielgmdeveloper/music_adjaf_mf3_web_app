import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AddPraise, CreateCultRequest, CultResponse} from "../model/cult/cult";
import { CreateMusic, Music, MusicDownload } from '../model/music/music';

import { Group } from '../model/group/group';
import { CreateAccountRequest, LoginRequest, LoginResponse } from '../model/auth/auth';
import { AuthTokenService } from './auth-token.service';
@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  private url: string = "http://191.252.186.3:8080/music_adjaf_mf3-0.0.1/v1"
  private tokenService: AuthTokenService;
  constructor(private http: HttpClient) {
    this.tokenService = new AuthTokenService();
  }

  get headersAuth(): HttpHeaders {
    const token = this.tokenService.getToken;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    })
  }

  createCult(payload: CreateCultRequest): Observable<any>{
    return this.http.post(`${this.url}/cult`, payload, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }



  get getCultsDay() : Observable<Array<CultResponse>> {
    return this.http.get<Array<CultResponse>>(`${this.url}/cult`, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  addPraiseOnCult(payload: AddPraise): Observable<any> {
    
    return this.http.post<any>(`${this.url}/cult/addpraise`, payload, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  getCultById(cultId: string): Observable<CultResponse> {
    return this.http.get<CultResponse>(`${this.url}/cult/${cultId}`, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  createMusic(payload: CreateMusic): Observable<any> {
    const formData = new FormData();
    const musicJson = {name: payload.name,singer: payload.singer, letter: payload.letter}
    formData.append("music", payload.music!);
    formData.append("musicJson", JSON.stringify(musicJson));
    return this.http.post<any>(`${this.url}/music`, formData, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  getMusics(name?: string): Observable<Array<Music>> {
    return this.http.get<Array<Music>>(`${this.url}/music?name=${name ?? ""}`, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  getMusicsUrl(ids: Array<string>): Observable<Array<MusicDownload>> {
    return this.http.post<Array<MusicDownload>>(`${this.url}/music/pressined`, {musicsIds: ids}, {headers: this.headersAuth}).pipe(
      res => res,
      err => err
    );
  }

  get getGroups() : Observable<Array<Group>> {
    return this.http.get<Array<Group>>(`${this.url}/singer`, {headers: this.headersAuth}).pipe(
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

  register(payload: CreateAccountRequest): Observable<any> {
    return this.http.post<any>(`${this.url}/authentication/createuser`, payload).pipe(
      res => res,
      err => err,
    )
  }

}
