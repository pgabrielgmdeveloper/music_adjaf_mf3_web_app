import { Injectable } from '@angular/core';
import { CultResponse } from '../model/cult/cult';

@Injectable({
  providedIn: 'root'
})
export class TransferInfoCultService {

  private cultInfos: string

  constructor() { 
    this.cultInfos = ""
  }

  get getCultInfos(): string {
    return this.cultInfos
  }

  set setCultInfos(cult: string) {
    this.cultInfos = cult
  }
}
