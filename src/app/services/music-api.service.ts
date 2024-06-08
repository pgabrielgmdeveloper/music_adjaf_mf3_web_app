import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CultResponse} from "../model/cult/cult";
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
}
